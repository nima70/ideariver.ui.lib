import React from "react";
import { Handle, Position } from "reactflow";
import Image from "next/image"; // For Next.js image optimization (optional)

interface NodeProps {
  data: {
    label: string;
    inputs?: string[];
    outputs?: string[];
  };
}

export default function CustomNode({ data }: NodeProps) {
  const { label, inputs = [], outputs = [] } = data;

  const handleOffset = 40;
  const nodeHeight = Math.max(
    120,
    Math.max(inputs.length, outputs.length) * handleOffset + 40
  );

  return (
    <div
      className="p-6 bg-card text-primary-foreground rounded-lg shadow-lg relative flex flex-col items-center"
      style={{ height: `${nodeHeight}px` }}
    >
      {/* Node Label */}
      <div className="text-lg font-extrabold text-foreground mb-2">{label}</div>

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
