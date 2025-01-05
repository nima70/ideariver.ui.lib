import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FlowToolbar from "../../components/FlowToolbar";
import { Node } from "reactflow";

// Meta configuration for the Storybook
const meta: Meta<typeof FlowToolbar> = {
  title: "Flow/FlowToolbar",
  component: FlowToolbar,
  tags: ["autodocs"],
  argTypes: {
    onAddNode: { action: "addNode" },
    onUpdateNode: { action: "updateNode" },
    selectedNode: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof FlowToolbar>;

// Default story for FlowToolbar
export const Default: Story = {
  render: () => {
    const [nodes, setNodes] = useState<Node[]>([]); // State for added nodes
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    // Add Node Handler
    const handleAddNode = (node: Node) => {
      setNodes((nds) => [...nds, node]);
    };

    // Update Node Handler
    const handleUpdateNode = (id: string, data: Partial<Node>) => {
      setNodes((nds) =>
        nds.map((node) => (node.id === id ? { ...node, ...data } : node))
      );
    };

    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">FlowToolbar Playground</h1>

        <FlowToolbar
          onAddNode={handleAddNode}
          onUpdateNode={handleUpdateNode}
          selectedNode={selectedNode}
        />

        {/* Display Added Nodes */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Nodes</h2>
          <ul>
            {nodes.map((node) => (
              <li key={node.id} className="mt-2">
                {node.data.label} - Inputs: {node.data.inputs?.length} -
                Outputs: {node.data.outputs?.length}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
};
