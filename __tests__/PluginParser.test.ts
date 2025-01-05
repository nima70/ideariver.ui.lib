import fs from "fs";
import path from "path";
import { GroupPlugin } from "../../controlengines/services/GroupPlugin";
import { JsonPluginParser } from "../../controlengines/services/PluginParser";
import { StaticPluginManager } from "../../controlengines/services/StaticPluginManger";
import { initializePluginParser } from "./helper";

// Unit Test for Plugin Parsing
describe("JsonPluginParser - Plugin Parsing", () => {
  it("should parse the JSON and construct the plugin flow", async () => {
    // Read sample JSON data
    const parsedGroup = initializePluginParser("./testSet/sampleFlow.json");
    // Basic Validation - Ensure that plugins are added
    expect(parsedGroup.listPlugins().length).toBeGreaterThan(0);
    expect(parsedGroup.listConnections().length).toBeGreaterThan(0);

    // Check for specific nodes and connections
    expect(
      parsedGroup
        .listPlugins()
        .some(
          (plugin) => plugin.constructor.name === "Constant Value Generator"
        )
    ).toBeTruthy();

    expect(
      parsedGroup
        .listConnections()
        .some(
          (conn) =>
            conn.source === "0.19407061602281406" &&
            conn.target === "0.9282406088660826"
        )
    ).toBeTruthy();
  });
});
