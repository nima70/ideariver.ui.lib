import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "../../components/ui/input"; // Adjust the import path as needed

const meta: Meta<typeof Input> = {
  title: "Shadcn/Input",
  component: Input,
  tags: ["autodocs"], // Enables automatic documentation in Storybook
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the input",
    },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "password", "number"],
      },
      description: "Type of the input",
      defaultValue: "text",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default story for the Input component
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    type: "text",
  },
};

// Input with type password
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

// Input with type email
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};

// Input with disabled state
export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
