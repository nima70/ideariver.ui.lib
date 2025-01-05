import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/Drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Node } from "reactflow";

interface NodeParameterDrawerProps {
  selectedNode: Node | null;
  isOpen: boolean;
  onSave: (id: string, updatedData: Partial<Node>) => void;
  onClose: () => void;
}

export default function NodeParameterDrawer({
  selectedNode,
  isOpen,
  onSave,
  onClose,
}: NodeParameterDrawerProps) {
  const [parameters, setParameters] = useState<Record<string, any>>({});

  // Initialize parameters when a node is selected
  useEffect(() => {
    if (selectedNode) {
      setParameters(selectedNode.data.parameters || {});
    }
  }, [selectedNode]);

  // Handle input change
  const handleInputChange = (param: string, value: string | number) => {
    setParameters((prev) => ({
      ...prev,
      [param]: value,
    }));
  };

  // Save updated parameters
  const handleSave = () => {
    if (selectedNode) {
      const updatedNode: Partial<Node> = {
        data: {
          ...selectedNode.data,
          parameters,
        },
      };

      onSave(selectedNode.id, updatedNode);
      onClose();
    }
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Node Parameters</DrawerTitle>
          <p className="text-sm">
            Adjust the parameters for{" "}
            <span className="font-semibold">{selectedNode?.data.label}</span>
          </p>
        </DrawerHeader>
        <div className="p-6 space-y-4">
          {Object.entries(parameters).map(([paramName, value], index) => (
            <div key={index}>
              <label className="text-sm font-medium">
                {paramName.toUpperCase()}
              </label>
              <Input
                type="number"
                value={value}
                onChange={(e) =>
                  handleInputChange(paramName, Number(e.target.value))
                }
              />
            </div>
          ))}
        </div>
        <DrawerFooter>
          <Button onClick={handleSave}>Save</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
