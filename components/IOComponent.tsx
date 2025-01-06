//./IOComponent
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
import IOManager from "./IOConfigurationTable";
import IOConfigDialog from "./IOConfigDialog"; // Import the dialog component
import { IO } from "../../controlengines/core/PluginConfig";

interface AddEditIOProps {
  open: boolean;
  onClose: () => void;
  onSave: (inputs: IO[], outputs: IO[]) => void;
  initialInputs?: IO[];
  initialOutputs?: IO[];
}

enum IOType {
  INPUT,
  OUTPUT,
}

export default function AddEditIO({
  open,
  onClose,
  onSave,
  initialInputs = [],
  initialOutputs = [],
}: AddEditIOProps) {
  const [inputIOList, setInputIOList] = useState<IO[]>(initialInputs);
  const [outputIOList, setOutputIOList] = useState<IO[]>(initialOutputs);
  const [formData, setFormData] = useState<IO>({
    name: "",
    title: "",
    description: "",
    type: "input",
  });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editType, setEditType] = useState<IOType>(IOType.INPUT); // Track whether adding/editing input or output



  const handleSave = () => {
    onSave(inputIOList, outputIOList);
    onClose();
  };

  const handleAddIO = (type: IOType) => {
    setFormData({
      name: "",
      title: "",
      description: "",
      type: type === IOType.INPUT ? "input" : "output",
    });
    setEditingIndex(null);
    setEditType(type);
    setDialogOpen(true);
  };

  const handleEditIO = (index: number, type: IOType) => {
    const selectedList = type === IOType.INPUT ? inputIOList : outputIOList;
    setFormData(selectedList[index]);
    setEditingIndex(index);
    setEditType(type);
    setDialogOpen(true);
  };

  const handleDeleteIO = (index: number, type: IOType) => {
    if (type === IOType.INPUT) {
      setInputIOList((prev) => prev.filter((_, i) => i !== index));
    } else {
      setOutputIOList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleDialogSave = (config: IO) => {
    if (editType === IOType.INPUT) {
      if (editingIndex !== null) {
        setInputIOList((prev) =>
          prev.map((item, index) => (index === editingIndex ? config : item))
        );
      } else {
        setInputIOList((prev) => [...prev, config]);
      }
    } else {
      if (editingIndex !== null) {
        setOutputIOList((prev) =>
          prev.map((item, index) => (index === editingIndex ? config : item))
        );
      } else {
        setOutputIOList((prev) => [...prev, config]);
      }
    }
    setDialogOpen(false);
  };

  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Manage I/O Configurations</DrawerTitle>
          </DrawerHeader>

          {/* Inputs Section */}
          <IOManager
            ioList={inputIOList}
            onEdit={(index) => handleEditIO(index, IOType.INPUT)}
            onDelete={(index) => handleDeleteIO(index, IOType.INPUT)}
            dataType="input"
            onAdd={() => handleAddIO(IOType.INPUT)}
          />

          {/* Outputs Section */}
          <IOManager
            ioList={outputIOList}
            onEdit={(index) => handleEditIO(index, IOType.OUTPUT)}
            onDelete={(index) => handleDeleteIO(index, IOType.OUTPUT)}
            dataType="output"
            onAdd={() => handleAddIO(IOType.OUTPUT)}
          />

          <DrawerFooter>
            <Button onClick={handleSave}>Save All</Button>
            <DrawerClose>
              <Button onClick={onClose} variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* I/O Config Dialog for Add/Edit */}
      <IOConfigDialog
        open={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleDialogSave}
        initialData={editingIndex !== null ? formData : undefined}
      />
    </>
  );
}
