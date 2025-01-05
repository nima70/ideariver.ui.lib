import React from "react";
import PluginFlow from "../../components/PluginFlow";
import { Meta } from "@storybook/react";

export default {
  title: "Flow/Plugin Flow Diagram",
  component: PluginFlow,
} as Meta;

// Example configurations passed in Storybook
export const ExampleFlow = () => <PluginFlow />;
