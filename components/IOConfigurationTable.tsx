import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

interface IOConfig {
  name: string;
  title: string;
  type: string;
  description: string;
  unit?: string;
}

interface IOConfigurationTableProps {
  ioList: IOConfig[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  dataType: "input" | "output";
  onAdd: () => void;
}

export default function IOManager({
  ioList,
  onEdit,
  onDelete,
  dataType,
  onAdd,
}: IOConfigurationTableProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Manage {dataType === "input" ? "Inputs" : "Outputs"}
      </h2>
      <Table>
        <TableCaption>
          {dataType === "input" ? "Input List" : "Output List"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ioList.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-right ">
                <div className="space-x-3">
                  <Button onClick={() => onEdit(index)}>Edit</Button>
                  <Button variant="destructive" onClick={() => onDelete(index)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={onAdd} className="mt-4">
        Add {dataType}
      </Button>
    </div>
  );
}
