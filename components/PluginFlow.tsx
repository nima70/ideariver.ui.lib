import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";

// Example plugin data (dynamic I/O)
const plugins = [
  {
    id: "1",
    label: "DC Motor",
    inputs: ["voltage"],
    outputs: ["current", "torque", "position", "speed"],
  },
  //   {
  //     id: "2",
  //     label: "Sine Wave Generator",
  //     inputs: ["frequency"],
  //     outputs: ["signal"],
  //   },
  //   {
  //     id: "3",
  //     label: "Constant Value",
  //     inputs: [],
  //     outputs: ["value"],
  //   },
];

// Convert plugins to React Flow nodes
const initialNodes: Node[] = plugins.map((plugin, index) => ({
  id: plugin.id,
  type: "custom",
  position: { x: 200 * index, y: 100 },
  data: { ...plugin },
}));

const initialEdges: Edge[] = [];

export default function PluginFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
