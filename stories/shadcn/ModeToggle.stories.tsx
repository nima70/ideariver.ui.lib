import { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../../components/ui/ModeToggle"; // Adjust the import path as needed
import { ThemeProvider } from "next-themes"; // Required for theme context

const meta: Meta<typeof ModeToggle> = {
  title: "Shadcn/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"], // Enables automatic documentation in Storybook
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered", // Center the component in the Storybook preview
  },
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

// Default story for the ModeToggle component
export const Default: Story = {};
