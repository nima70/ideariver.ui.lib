import { GroupPlugin } from "@/controlengines/services/GroupPlugin";
import { initializePluginParser } from "./helper";
import fs from "fs";
// New Test for GroupPlugin Execution
describe("GroupPlugin - Execution Over Time", () => {
  let groupPlugin: GroupPlugin;

  beforeEach(() => {
    groupPlugin = initializePluginParser(
      "./testSet/sampleFlow.json"
    ) as GroupPlugin;
  });

  it("should execute the group plugin over time with dt = 0.01", () => {
    const results: { time: number; value: any }[] = [];
    const dt = 0.01;
    const totalTime = 1; // Simulate for 1 second
    let currentTime = 0;

    for (let i = 0; i <= totalTime / dt; i++) {
      const output = groupPlugin.execute({ dt });
      results.push({ time: currentTime, value: output });
      currentTime += dt;
    }

    // Export results to CSV for visualization
    const csvContent = results
      .map(({ time, value }) => `${time},${JSON.stringify(value)}`)
      .join("\n");
    fs.writeFileSync(
      "./group_plugin_test_output.csv",
      `Time,Output\n${csvContent}`
    );
    console.log(
      "Group plugin execution data exported to group_plugin_test_output.csv"
    );
  });
});
