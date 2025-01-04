import { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Check, ChevronRight, Circle } from "lucide-react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Shadcn/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"], // Enables auto-generated docs in Storybook
  // Removed className from here as it does not exist on DropdownMenu component itself
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

// Default Dropdown Menu story
export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={true}>
          Checkbox Item
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="radio1">
          <DropdownMenuRadioItem value="radio1">
            Radio Item 1
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="radio2">
            Radio Item 2
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown with sub-menu story
export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu with Sub-menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            Sub-menu <ChevronRight className="ml-auto h-4 w-4" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Sub-item 1</DropdownMenuItem>
            <DropdownMenuItem>Sub-item 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown with radio items story
export const WithRadioItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu with Radios</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value="radio1">
          <DropdownMenuRadioItem value="radio1">
            <Circle className="mr-2 h-4 w-4" /> Radio Item 1
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="radio2">
            <Circle className="mr-2 h-4 w-4" /> Radio Item 2
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// Dropdown with checkboxes story
export const WithCheckboxItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu with Checkboxes</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={true}>
          <Check className="mr-2 h-4 w-4" /> Checkbox 1
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>
          <Check className="mr-2 h-4 w-4" /> Checkbox 2
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
