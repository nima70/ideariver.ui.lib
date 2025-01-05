import React, { useState } from "react";
import SaveModal from "./SaveModal";
import { Node, Edge } from "reactflow";
import { Button } from "./ui/button";

interface SaveButtonProps {
  nodes: Node[];
  edges: Edge[];
}

export default function SaveButton({ nodes, edges }: SaveButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jsonData, setJsonData] = useState<string>("");

  const handleSave = () => {
    const data = {
      nodes: nodes,
      edges: edges,
    };
    setJsonData(JSON.stringify(data, null, 2)); // Pretty print the JSON
    setIsModalOpen(true);
  };

  return (
    <>
      <Button onClick={handleSave} className="bg-primary">
        Save Flow
      </Button>
      <SaveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jsonData={jsonData}
      />
    </>
  );
}
