import fs from "fs";
import path from "path";
import { executeFlow } from "../components/FlowExecutionEngine";
import { Node, Edge } from "reactflow";

// Unit Test for Execution Engine
describe("Execution Engine - Flow Execution", () => {
  it("should execute the plugin flow and generate results", async () => {
    // Read sample JSON data
    const sampleData = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "./testSet/sampleFlow.json"),
        "utf-8"
      )
    );
    const { nodes, edges } = sampleData as {
      nodes: Node[];
      edges: Edge[];
    };

    const initialInput = {
      dt: 0.01,
    };

    const results = await executeFlow(nodes, edges, initialInput);

    // Transform results to export to CSV
    const csvContent = Object.entries(results)
      .map(([nodeId, output]) => {
        const formattedOutput = Array.isArray(output)
          ? output.join(",")
          : output;
        return `${nodeId},${formattedOutput}`;
      })
      .join("\n");

    const outputPath = path.resolve(
      __dirname,
      "./execution_flow_test_output.csv"
    );

    // Write results to a CSV file
    fs.writeFileSync(outputPath, `Node ID,Output Values\n${csvContent}`);
    console.log(`Execution flow results exported to ${outputPath}`);

    // Basic Validation - Ensure that outputs are defined
    expect(Object.keys(results).length).toBeGreaterThan(0);
    expect(results["0.9282406088660826"]).toBeDefined();
  });
});
