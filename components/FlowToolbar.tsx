import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/Drawer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Node } from "reactflow";
import PluginTable from "./PluginTable";
import { configPlugins } from "../../controlengines/plugins/configPlugins";
import { PluginConfig } from "@/controlengines/core/PluginConfig";

interface FlowToolbarProps {
  onAddNode: (node: Node) => void;
}

export default function FlowToolbar({ onAddNode }: FlowToolbarProps) {
  const [open, setOpen] = useState(false);

  const handleAddNode = (plugin: PluginConfig) => {
    const newNode: Node = {
      id: `${Math.random()}`,
      type: "custom",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label: plugin.name,
        inputs: plugin.inputs?.map((input) => input.name) || [], // Extract input names
        outputs: plugin.outputs?.map((output) => output.name) || [], // Extract output names
      },
    };
    onAddNode(newNode);
    setOpen(false); // Close drawer after adding node
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-primary">Add Plugin Node</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Select a Plugin</DrawerTitle>
          <DrawerDescription>Add a plugin node to your flow.</DrawerDescription>
        </DrawerHeader>

        <div className="p-6 space-y-4">
          <PluginTable
            plugins={configPlugins.map((p) => p.config)}
            onSelect={handleAddNode}
          />
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
