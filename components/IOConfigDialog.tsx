import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IO } from "../../controlengines/core/PluginConfig";

interface IOConfigDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (config: IO) => void;
  initialData?: IO;
}

export default function IOConfigDialog({
  open,
  onClose,
  onSave,
  initialData,
}: IOConfigDialogProps) {
  const [formData, setFormData] = useState<IO>(
    initialData || { name: "", title: "", type: "", description: "", unit: "" }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: "", title: "", type: "", description: "", unit: "" });
    }
  }, [initialData, open]);

  const handleInputChange = (field: keyof IO, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData
              ? "Edit I/O Configuration"
              : "Add New I/O Configuration"}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Title</label>
            <Input
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Type</label>
            <Input
              value={formData.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <Input
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Unit (optional)</label>
            <Input
              value={formData.unit || ""}
              onChange={(e) => handleInputChange("unit", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
