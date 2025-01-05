import React, { useCallback, useEffect, useState } from "react";
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
import FlowToolbar from "./FlowToolbar";
import SaveButton from "./SaveButton";
import NodeParameterDrawer from "./NodeParameterDrawer";
import { Button } from "./ui/button";
const initialEdges: Edge[] = [];

export default function PluginFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isNodeSelected, setNodeSelected] = useState(false);
  // Add node callback
  const addNode = (node: Node) => {
    setNodes((nds) =>
      nds.concat({
        ...node,
        selectable: true, // Ensure node can be selected
        draggable: true,
      })
    );
  };

  // Update node callback
  const updateNode = (id: string, data: Partial<Node>) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, ...data } : node))
    );
  };

  // Delete nodes/edges on Delete key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete" || event.key === "Backspace") {
        setNodes((nds) => nds.filter((node) => !node.selected));
        setEdges((eds) => eds.filter((edge) => !edge.selected));
      }
    },
    [setNodes, setEdges]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Select node for toolbar update
  const onNodeClick = (_: any, node: Node) => {
    setSelectedNode(node);
  };
  const onNodeDoubleClick = (_: any, node: Node) => {
    console.log("Double-click detected on:", node);
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  // Handle edge connection
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleSelectionChange = (params: any) => {
    if (params.nodes.length > 0) {
      setNodeSelected(true);
      setSelectedNode(params.nodes[0]); // Select the first node
    } else {
      setNodeSelected(false);
      setSelectedNode(null); // No node selected
    }
  };

  const handleEditNode = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Toolbar with Drawer for Adding Nodes */}
      <div className="absolute top-4 left-4 z-50 flex flex-col gap-4">
        <FlowToolbar
          onAddNode={addNode}
          onUpdateNode={updateNode}
          selectedNode={selectedNode}
        />
        <Button disabled={!isNodeSelected} onClick={handleEditNode}>
          Edit Node
        </Button>
        <SaveButton nodes={nodes} edges={edges} />
      </div>

      {/* React Flow Canvas */}
      <div className="w-full h-full absolute inset-0 z-10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ custom: CustomNode }}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onNodeDoubleClick={onNodeDoubleClick}
          fitView
          nodesDraggable={true}
          nodesConnectable={true}
          elementsSelectable={true} // Enable selection and interaction
          selectNodesOnDrag={true} // Allow selection during drag
          onSelectionChange={handleSelectionChange}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <NodeParameterDrawer
        selectedNode={selectedNode}
        isOpen={isDrawerOpen}
        onSave={updateNode}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
