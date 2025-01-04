import React, { useCallback, useEffect } from "react";
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

const plugins = [
  {
    id: "1",
    label: "DC Motor",
    icon: "/images/industrial-motor.jpg",
    inputs: ["voltage"],
    outputs: ["current", "torque", "position", "speed"],
  },
];

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

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete" || event.key === "Backspace") {
        setNodes((nds) => nds.filter((node) => !node.selected));
        setEdges((eds) => eds.filter((edge) => !edge.selected));
      }
    },
    [setNodes, setEdges]
  );

  const addNode = () => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type: "custom",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label: `New Node ${nodes.length + 1}`,
        inputs: ["input"],
        outputs: ["output"],
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative w-full h-screen">
      {/* Add Node Button with z-index fix */}
      <button
        onClick={addNode}
        className="absolute top-4 left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded shadow-lg"
      >
        Add Node
      </button>

      {/* React Flow Canvas */}
      <div className="w-full h-full absolute inset-0 z-10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ custom: CustomNode }}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
