import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../../components/ui/textarea"; // Adjust the import path to where your Textarea component is located

const meta: Meta<typeof Textarea> = {
  title: "Shadcn/Textarea", // Title to organize in Storybook
  component: Textarea,
  tags: ["autodocs"], // Enables automatic documentation generation
  argTypes: {
    className: {
      control: "text",
      description: "Applies custom classes for styling",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea",
    },
  },
  parameters: {
    layout: "centered", // Adjust the layout if necessary
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

// Default story with placeholder text
export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

// Disabled textarea
export const Disabled: Story = {
  args: {
    placeholder: "This field is disabled",
    disabled: true,
  },
};

// Textarea with custom class for height and border
export const CustomStyled: Story = {
  args: {
    placeholder: "Custom styled textarea",
    className: "h-40 border-dashed border-2 border-primary",
  },
};
