import { Node, Edge } from "reactflow";
import { configPlugins } from "../../controlengines/plugins/configPlugins";
import { PluginConfig } from "../../controlengines/core/PluginConfig";
import { BasePlugin } from "../../controlengines/core/BasePlugin";

// Helper function to get plugin instance by name
const getPluginInstance = (pluginName: string) => {
  const foundPlugin = configPlugins.find(
    (p) => p.config.name === pluginName
  );
  return foundPlugin ? new foundPlugin.plugin() : null;
};

// Execute Flow Function
export async function executeFlow(
  nodes: Node[],
  edges: Edge[],
  initialInput: Record<string, any> = {}
) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const results: Record<string, any> = {};
  const nodeOutputs: Record<string, any> = {};
  
  // Find starting nodes (nodes without incoming edges)
  const startingNodes = nodes.filter(
    (node) => !edges.some((edge) => edge.target === node.id)
  );

  // Execute starting nodes first
  for (const node of startingNodes) {
    await executeNode(node, initialInput);
  }

  // Recursive execution function
  async function executeNode(node: Node, input: Record<string, any>) {
    const pluginInstance = getPluginInstance(node.data.label);

    if (!pluginInstance) {
      console.warn(`Plugin ${node.data.label} not found`);
      return;
    }

    // Initialize the plugin if needed
    if (!results[node.id]) {
      pluginInstance.init({
        ...(node.data.parameters || {}),
      });
    }

    // Execute plugin with the input
    const output = pluginInstance.execute(input);

    // Store output
    nodeOutputs[node.id] = output;

    // Find all connected edges to propagate results
    const connectedEdges = edges.filter((edge) => edge.source === node.id);

    for (const edge of connectedEdges) {
      const targetNode = nodeMap.get(edge.target);

      if (targetNode) {
        const targetInput = { ...initialInput };

        // Map outputs to inputs (match by key/index if possible)
        nodeOutputs[node.id]?.forEach((value: any, index: number) => {
          const inputKey = targetNode.data.inputs?.[index] || "default";
          targetInput[inputKey] = value;
        });

        // Recursively execute next node
        await executeNode(targetNode, targetInput);
      }
    }
  }

  return results;
}
