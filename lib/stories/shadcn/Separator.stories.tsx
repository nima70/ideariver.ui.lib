import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../../components/ui/separator"; // Adjust the import path to where your Separator component is located

const meta: Meta<typeof Separator> = {
  title: "Shadcn/Separator", // Adjust the title to match your Storybook structure
  component: Separator,
  tags: ["autodocs"], // Enables automatic documentation generation
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      description: "Defines the orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Indicates whether the separator is just decorative",
    },
    className: {
      control: "text",
      description: "Applies custom classes for styling",
    },
  },
  parameters: {
    layout: "centered", // Adjust if necessary for your component layout
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

// Default story with horizontal separator and surrounding content
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    decorative: true,
    className: "my-4",
  },
  render: (args) => (
    <div className="flex flex-col items-center">
      <p>Above the separator</p>
      <Separator {...args} />
      <p>Below the separator</p>
    </div>
  ),
};

// Vertical separator with surrounding content
export const Vertical: Story = {
  args: {
    orientation: "vertical",
    decorative: true,
    className: "h-20",
  },
  render: (args) => (
    <div className="flex flex-row items-center space-x-4">
      <p>Left of the separator</p>
      <Separator {...args} />
      <p>Right of the separator</p>
    </div>
  ),
};
