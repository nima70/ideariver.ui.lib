import type { Meta, StoryObj } from "@storybook/react";
import PluginTable from "../../components/PluginTable";
import { configPlugins } from "../../../controlengines/plugins/configPlugins";

// Transform plugins to pass as props
const loadedPlugins = configPlugins.map(({ config }) => ({
  name: config!.name,
  description: config!.description,
}));

const meta: Meta<typeof PluginTable> = {
  title: "Components/PluginTable",
  component: PluginTable,
  tags: ["autodocs"],
  args: {
    plugins: loadedPlugins,
  },
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof PluginTable>;

// Default Story
export const Default: Story = {
  args: {
    plugins: loadedPlugins,
  },
};

// Empty State
export const NoPlugins: Story = {
  args: {
    plugins: [],
  },
};
