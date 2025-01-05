import React from "react";
import { Button } from "./ui/button";

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  jsonData: string;
}

export default function SaveModal({
  isOpen,
  onClose,
  jsonData,
}: SaveModalProps) {
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData);
    alert("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "flowConfig.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-card p-6 rounded-lg w-3/4 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Flow Configuration (JSON)</h2>
        <textarea
          value={jsonData}
          readOnly
          rows={10}
          className="w-full p-2 bg-secondary rounded-lg text-sm font-mono"
        />
        <div className="flex justify-end mt-4 gap-4">
          <Button onClick={handleCopy}>Copy to Clipboard</Button>
          <Button onClick={handleDownload}>Download as File</Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
