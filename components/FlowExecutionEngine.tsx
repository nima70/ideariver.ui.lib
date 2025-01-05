import { Node, Edge } from "reactflow";
import { configPlugins } from "../../controlengines/plugins/configPlugins";
import { BasePlugin } from "../../controlengines/core/BasePlugin";
import { PluginConfig } from "../../controlengines/core/PluginConfig";

// Helper to construct and initialize plugin instances
const getPluginInstance = (pluginName: string, parameters: any) => {
  const foundPlugin = configPlugins.find((p) => p.config.name === pluginName);

  if (!foundPlugin) {
    console.warn(`Plugin ${pluginName} not found.`);
    return null;
  }

  const pluginInstance = new foundPlugin.plugin();
  pluginInstance.init(parameters || {});
  return pluginInstance;
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
    const pluginInstance = getPluginInstance(
      node.data.label,
      node.data.parameters
    );

    if (!pluginInstance) {
      console.warn(`Plugin ${node.data.label} could not be instantiated.`);
      return;
    }

    // Execute plugin with the input
    const output = pluginInstance.execute(input);

    // Store output
    nodeOutputs[node.id] = output;
    results[node.id] = output;

    // Find connected nodes and propagate outputs
    const connectedEdges = edges.filter((edge) => edge.source === node.id);

    for (const edge of connectedEdges) {
      const targetNode = nodeMap.get(edge.target);

      if (targetNode) {
        const targetInput = { ...initialInput };

        // Map outputs to inputs (match by key or order)
        // Updated mapping logic in executeNode function
        for (const [key, value] of Object.entries(nodeOutputs[node.id] || {})) {
          const inputKey = targetNode.data.inputs?.find(
            (input: string) => input === key
          ) || key; // Match by key or fallback to default

          targetInput[inputKey] = value;
        }

        // Recursively execute the next node
        await executeNode(targetNode, targetInput);
      }
    }
  }

  return results;
}
