import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import { menuItems } from "../../app/config/menuItems"; // Import the menuItems

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen", // Display in fullscreen to resemble a real navbar
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

// Default story using the imported menuItems
export const Default: Story = {
  args: {
    menuItems: menuItems,
    siteName: "Ideariver",
  },
};
