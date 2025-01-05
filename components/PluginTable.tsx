import { Button } from "./ui/button";

interface PluginTableProps {
  plugins: {
    name: string;
    description: string;
    inputs?: string[];
    outputs?: string[];
  }[];
  onSelect: (plugin: any) => void; // Pass plugin to FlowToolbar
}

export default function PluginTable({ plugins, onSelect }: PluginTableProps) {
  return (
    <div className="overflow-x-auto mt-6">
      <h1 className="text-3xl font-bold mb-4 text-foreground">
        Available Plugins
      </h1>
      <table className="min-w-full bg-card shadow-lg rounded-lg">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="py-3 px-6 text-left">Plugin Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plugins.length > 0 ? (
            plugins.map((plugin, index) => (
              <tr
                key={index}
                className="border-b hover:bg-primary-light transition"
              >
                <td className="py-4 px-6">{plugin.name}</td>
                <td className="py-4 px-6">{plugin.description}</td>
                <td className="py-4 px-6 text-center">
                  <Button onClick={() => onSelect(plugin)}>Add Node</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-4 px-6 text-center">
                No plugins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
