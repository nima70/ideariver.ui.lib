import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar"; // Adjust the import path to the Sidebar component
import { MenuItem } from "./types"; // Import the MenuItem type for your story

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/home",
    icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
    subMenuItems: [],
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
    subMenuItems: [],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
    subMenuItems: [
      {
        title: "Account Settings",
        href: "/settings/account",
        icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
      },
      {
        title: "Notification Settings",
        href: "/settings/notifications",
        icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
      },
    ],
  },
];

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the sidebar is open or closed.",
    },
    toggleSidebar: {
      action: "toggleSidebar",
      description: "Function to toggle the sidebar open and closed.",
    },
    menuItems: {
      control: "object",
      description: "Array of menu items displayed in the sidebar.",
    },
  },
  parameters: {
    layout: "fullscreen", // Adjust for full-page rendering if necessary
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

// Default Sidebar story with open state
export const Default: Story = {
  args: {
    open: true,
    toggleSidebar: () => {},
    menuItems,
  },
};

// Closed Sidebar story
export const Closed: Story = {
  args: {
    open: false,
    toggleSidebar: () => {},
    menuItems,
  },
};

// Sidebar with submenus story
export const WithSubMenu: Story = {
  args: {
    open: true,
    toggleSidebar: () => {},
    menuItems: [
      ...menuItems,
      {
        title: "More Options",
        href: "/more-options",
        icon: <svg> {/* Replace with a valid SVG or icon component */}</svg>,
        subMenuItems: [
          {
            title: "Submenu 1",
            href: "/more-options/submenu1",
            icon: (
              <svg> {/* Replace with a valid SVG or icon component */}</svg>
            ),
          },
          {
            title: "Submenu 2",
            href: "/more-options/submenu2",
            icon: (
              <svg> {/* Replace with a valid SVG or icon component */}</svg>
            ),
          },
        ],
      },
    ],
  },
};
