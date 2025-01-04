import { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "../../components/ui/pagination"; // Adjust the import path as needed

const meta: Meta<typeof Pagination> = {
  title: "Shadcn/Pagination",
  component: Pagination,
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

type Story = StoryObj<typeof Pagination>;

// Default story rendering the Pagination component with pagination items
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/previous" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/10">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

// Story rendering the Pagination component with custom styling
export const CustomStyle: Story = {
  render: () => (
    <Pagination className="bg-gray-200 p-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/previous" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/10">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/next" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
