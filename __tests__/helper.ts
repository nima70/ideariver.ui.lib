import fs from "fs";
import path from "path";
import { GroupPlugin } from "../../controlengines/services/GroupPlugin";
import { JsonPluginParser } from "../../controlengines/services/PluginParser";
import { StaticPluginManager } from "../../controlengines/services/StaticPluginManger";

export function initializePluginParser(jsonFilePath: string) {
  const sampleData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, jsonFilePath), "utf-8")
  );
  const groupPlugin = new GroupPlugin();
  const pluginManager = new StaticPluginManager();
  const parser = new JsonPluginParser(pluginManager);
  return parser.parse(sampleData, groupPlugin);
}
