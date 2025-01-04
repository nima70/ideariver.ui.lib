import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import Image from "next/image";

interface CustomNodeData {
  label: string;
  icon?: string;  // Optional icon or image
  inputs?: string[];
  outputs?: string[];
}

// Use NodeProps to properly handle selection from ReactFlow
export default function CustomNode({ data, selected }: NodeProps<CustomNodeData>) {
  const { label, inputs = [], outputs = [], icon } = data;

  const handleOffset = 40;
  const nodeHeight = Math.max(
    140,
    Math.max(inputs.length, outputs.length) * handleOffset + 40
  );

  return (
    <div
      className={`p-6 rounded-lg shadow-lg relative flex flex-col items-center ${
        selected ? "border-4 border-primary" : "bg-card"
      }`}
      style={{ height: `${nodeHeight}px`, width: "220px" }}
    >
      {/* Node Label */}
      <div className="text-lg font-extrabold text-foreground mb-2">{label}</div>

      {/* Center Image/Icon */}
      {icon && (
        <div className="w-16 h-16 relative mb-4">
          <Image
            src={icon}
            alt={label}
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      )}

      {/* Dynamic Input Handles */}
      {inputs.map((input, index) => (
        <React.Fragment key={`input-${index}`}>
          <Handle
            type="target"
            position={Position.Left}
            id={`input-${index}`}
            className="w-4 h-4 bg-primary rounded-full"
            style={{
              top: `${handleOffset * index + 40}px`,
            }}
          />
          <div
            className="absolute left-[-120px] text-sm text-foreground"
            style={{
              top: `${handleOffset * index + 35}px`,
            }}
          >
            {input}
          </div>
        </React.Fragment>
      ))}

      {/* Dynamic Output Handles */}
      {outputs.map((output, index) => (
        <React.Fragment key={`output-${index}`}>
          <Handle
            type="source"
            position={Position.Right}
            id={`output-${index}`}
            className="w-4 h-4 bg-secondary rounded-full"
            style={{
              top: `${handleOffset * index + 40}px`,
            }}
          />
          <div
            className="absolute right-[-120px] text-sm text-foreground"
            style={{
              top: `${handleOffset * index + 35}px`,
            }}
          >
            {output}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
