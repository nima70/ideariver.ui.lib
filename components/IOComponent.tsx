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
  onSave: (config: IO) => void;
  initialData?: IO;
}

export default function AddEditIO({
  open,
  onClose,
  onSave,
  initialData,
}: AddEditIOProps) {
  const [formData, setFormData] = useState<IO>(
    initialData || { name: "", title: "", description: "", type: "input" }
  );
  const [ioList, setIoList] = useState<IO[]>([]);
  const [isDialogOpen, setDialogOpen] = useState(false); // State for dialog
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: "", title: "", description: "", type: "input" });
    }
  }, [initialData, open]);

  const handleSave = () => {
    onSave(formData);
    setIoList((prev) => [...prev, formData]);
    onClose();
  };

  const handleAddIO = () => {
    setFormData({ name: "", title: "", description: "", type: formData.type });
    setEditingIndex(null);
    setDialogOpen(true);
  };

  const handleEditIO = (index: number) => {
    setFormData(ioList[index]);
    setEditingIndex(index);
    setDialogOpen(true);
  };

  const handleDeleteIO = (index: number) => {
    setIoList((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDialogSave = (config: IO) => {
    if (editingIndex !== null) {
      // Update existing I/O
      setIoList((prev) =>
        prev.map((item, index) => (index === editingIndex ? config : item))
      );
    } else {
      // Add new I/O
      setIoList((prev) => [...prev, config]);
    }
    setDialogOpen(false);
  };

  return (
    <>
      <Drawer open={open} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              {initialData
                ? "Edit I/O Configuration"
                : "Add New I/O Configuration"}
            </DrawerTitle>
          </DrawerHeader>

          <IOManager
            ioList={ioList}
            onEdit={handleEditIO}
            onDelete={handleDeleteIO}
            dataType={formData.type}
            onAdd={handleAddIO} // Trigger dialog for adding I/O
          />

          <DrawerFooter>
            <Button onClick={handleSave}>Save</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
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
