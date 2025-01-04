import { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../../components/ui/navigation-menu"; // Adjust the import path as needed

const meta: Meta<typeof NavigationMenu> = {
  title: "Shadcn/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"], // Enables automatic documentation in Storybook
  parameters: {
    layout: "centered", // Center the component in the Storybook preview
  },
  argTypes: {
    className: {
      control: "text",
      description: "Optional additional class names for styling.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

// Default story rendering the NavigationMenu component with some menu items
export const Default: Story = {
  render: () => (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/link1">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/link2">Link 2</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 3</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/link3">Link 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Story rendering the NavigationMenu component with custom styling
export const CustomStyle: Story = {
  render: () => (
    <NavigationMenu className="bg-blue-500 text-white w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Custom Menu 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/custom-link1">
              Custom Link 1
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Custom Menu 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/custom-link2">
              Custom Link 2
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
