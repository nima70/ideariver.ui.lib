import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  useOnSelectionChange,
} from "reactflow";
import AddEditIO from "./IOComponent";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import FlowToolbar from "./FlowToolbar";
import SaveButton from "./SaveButton";
import NodeParameterDrawer from "./NodeParameterDrawer";
import { Button } from "./ui/button";
import { IO } from "@/controlengines/core/PluginConfig";
import { INPUT_NODE_ID, OUTPUT_NODE_ID } from "../constants/nodeConstants";

const initialEdges: Edge[] = [];

// Default non-deletable input/output nodes
const defaultNodes: Node[] = [
  {
    id: INPUT_NODE_ID,
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      label: "Input",
      description: "Default Input Node",
      deletable: false,
      inputs: [],
      outputs: [], // Default output
    },
  },
  {
    id: OUTPUT_NODE_ID,
    type: "custom",
    position: { x: 800, y: 200 },
    data: {
      label: "Output",
      description: "Default Output Node",
      deletable: false,
      inputs: [], // Default input
      outputs: [],
    },
  },
];

export default function PluginFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isNodeSelected, setNodeSelected] = useState(false);
  const [isIODrawerOpen, setIODrawerOpen] = useState(false); // IO Drawer State
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [selectedEdges, setSelectedEdges] = useState<string[]>([]);
  // Add node callback
  const addNode = (node: Node) => {
    setNodes((nds) =>
      nds.concat({
        ...node,
        selectable: true,
        draggable: true,
      })
    );
  };

  const selectedNodeRef = useRef<Node | null>(null);

  useEffect(() => {
    selectedNodeRef.current = selectedNode;
  }, [selectedNode]);
  // Update node callback
  const updateNode = (id: string, data: Partial<Node>) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, ...data } : node))
    );
  };

  // Prevent deletion of non-deletable nodes
  const handleDeleteNode = () => {
    setNodes((nds) =>
      nds.filter((node) => {
        if (node.id === INPUT_NODE_ID || node.id === OUTPUT_NODE_ID) {
          return true;
        }
        console.log("Deleting node.id:", node.id);
        return node.id !== selectedNodeRef.current?.id; // Use ref for latest value
      })
    );
    setEdges((eds) => eds.filter((edge) => !edge.selected));
  };

  // Delete nodes/edges on Delete key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete" || event.key === "Backspace") {
        console.log("keydown");
        handleDeleteNode();
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
    // setSelectedNode(node);
  };

  const onNodeDoubleClick = (_: any, node: Node) => {
    console.log("Double-click detected on:", node);
    // setSelectedNode(node);
    setDrawerOpen(true);
  };

  // Handle edge connection
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleSelectionChange = useCallback(
    (params: { nodes: Node[]; edges: Edge[] }) => {
      console.log("Selected Nodes:", params.nodes); // Debugging
      console.log("Selected Edges:", params.edges); // Debugging
      if (params.nodes.length > 0) {
        setSelectedNodes(params.nodes.map((node) => node.id));
        setSelectedNode(params.nodes[0]);
        console.log("selectedNode" + selectedNode);
        setNodeSelected(true);
      } else {
        setSelectedNodes([]);
        setSelectedNode(null);
        setNodeSelected(false);
      }
    },
    []
  );

  const handleEditNode = () => {
    setDrawerOpen(true);
  };

  // Open IO Drawer
  const handleOpenIODrawer = () => {
    setIODrawerOpen(true);
  };

  // Update input/output nodes' IO ports dynamically
  const handleSaveIO = (inputs: IO[], outputs: IO[]) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === INPUT_NODE_ID) {
          return {
            ...node,
            data: {
              ...node.data,
              outputs: inputs.map((input) => input.name), // Assign inputs to OUTPUT_NODE_ID
            },
          };
        } else if (node.id === OUTPUT_NODE_ID) {
          return {
            ...node,
            data: {
              ...node.data,
              inputs: outputs.map((output) => output.name), // Assign outputs to INPUT_NODE_ID
            },
          };
        }
        return node;
      })
    );
    setIODrawerOpen(false);
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
        <Button onClick={handleOpenIODrawer}>Add Input/Output</Button>
        <Button disabled={!isNodeSelected} onClick={handleEditNode}>
          Edit Node
        </Button>
        <Button disabled={!isNodeSelected} onClick={handleDeleteNode}>
          Delete Node
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
          elementsSelectable={true}
          selectNodesOnDrag={true}
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
      <AddEditIO
        open={isIODrawerOpen}
        onClose={() => setIODrawerOpen(false)}
        onSave={handleSaveIO}
      />
    </div>
  );
}
