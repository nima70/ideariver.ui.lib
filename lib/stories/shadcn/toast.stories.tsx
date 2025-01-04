import { Meta, StoryObj } from "@storybook/react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "../../components/ui/toast"; // Adjust the import path to where your Toast components are located

const meta: Meta<typeof Toast> = {
  title: "Shadcn/Toast", // Organize under "Components" in Storybook
  component: Toast,
  tags: ["autodocs"], // Enable autodocs
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "destructive"],
      description: "Defines the style variant of the toast",
    },
    className: {
      control: "text",
      description: "Applies custom class names for styling",
    },
  },
  parameters: {
    layout: "centered", // Adjust the layout for the component
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

// Default Toast story
export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastViewport />
      <Toast>
        <div className="flex items-start">
          <div>
            <ToastTitle>Default Toast</ToastTitle>
            <ToastDescription>
              This is a default toast notification.
            </ToastDescription>
          </div>
          <ToastClose />
        </div>
      </Toast>
    </ToastProvider>
  ),
  args: {
    variant: "default",
  },
};

// Destructive Toast story
export const Destructive: Story = {
  render: () => (
    <ToastProvider>
      <ToastViewport />
      <Toast variant="destructive">
        <div className="flex items-start">
          <div>
            <ToastTitle>Destructive Toast</ToastTitle>
            <ToastDescription>This action cannot be undone.</ToastDescription>
          </div>
          <ToastClose />
        </div>
      </Toast>
    </ToastProvider>
  ),
  args: {
    variant: "destructive",
  },
};
