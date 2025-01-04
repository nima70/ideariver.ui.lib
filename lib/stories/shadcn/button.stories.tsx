import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/ui/button"; // Adjust the import to match the correct path

const meta: Meta<typeof Button> = {
  title: "Shadcn/Button", // The path in Storybook
  component: Button, // The component you are documenting
  tags: ["autodocs"], // Enables auto-generated docs in Storybook
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Changes the visual style of the button",
      defaultValue: "default",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Changes the size of the button",
      defaultValue: "default",
    },
    children: {
      control: "text",
      description: "The content inside the button",
      defaultValue: "Button",
    },
    asChild: {
      control: "boolean",
      description: "Allows the button to function as a child slot component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};

// Destructive button story
export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
    size: "default",
  },
};

// Outline button story
export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "default",
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "default",
  },
};

// Ghost button story
export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "default",
  },
};

// Link button story
export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
    size: "default",
  },
};

// Small button story
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

// Large button story
export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

// Icon button story
export const Icon: Story = {
  args: {
    size: "icon",
    children: "🔔", // For example, using an emoji or an icon component
  },
};
