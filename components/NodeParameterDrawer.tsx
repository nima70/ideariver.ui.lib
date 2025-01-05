import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/Drawer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Node } from "reactflow";

interface NodeParameterDrawerProps {
  selectedNode: Node | null;
  isOpen: boolean;
  onSave: (id: string, updatedData: Record<string, any>) => void;
  onClose: () => void;
}

export default function NodeParameterDrawer({
  selectedNode,
  isOpen,
  onSave,
  onClose,
}: NodeParameterDrawerProps) {
  const [parameters, setParameters] = useState<Record<string, any>>({});

  useEffect(() => {
    if (selectedNode) {
      setParameters(selectedNode.data.parameters || {});
    }
  }, [selectedNode]);

  const handleInputChange = (param: string, value: string | number) => {
    setParameters((prev) => ({ ...prev, [param]: value }));
  };

  const handleSave = () => {
    if (selectedNode) {
      onSave(selectedNode.id, { parameters });
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
          {selectedNode?.data.parameters &&
            Object.entries(selectedNode.data.parameters).map(
              ([paramName, value], index) => (
                <div key={index}>
                  <label className="text-sm font-medium">
                    {paramName.toUpperCase()}
                  </label>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) =>
                      handleInputChange(paramName, e.target.value)
                    }
                  />
                </div>
              )
            )}
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
