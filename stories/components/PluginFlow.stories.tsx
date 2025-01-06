import React from "react";
import PluginFlow from "../../components/PluginFlow";
import { Meta } from "@storybook/react";
import { ReactFlowProvider } from "reactflow";

export default {
  title: "Flow/Plugin Flow Diagram",
  component: PluginFlow,
} as Meta;

// Wrap PluginFlow with ReactFlowProvider
export const ExampleFlow = () => (
  <ReactFlowProvider>
    <PluginFlow />
  </ReactFlowProvider>
);
