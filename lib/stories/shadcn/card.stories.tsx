import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card"; // Import the Card components

const meta: Meta<typeof Card> = {
  title: "Shadcn/Card",
  component: Card,
  tags: ["autodocs"], // Enables auto-generated docs in Storybook
  argTypes: {
    className: {
      control: "text",
      description: "Additional classes for styling the card",
    },
    children: {
      control: "text",
      description: "Content inside the card",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default card story
export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is the card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content. You can add any custom content here.</p>
      </CardContent>
      <CardFooter>
        <button className="btn-primary">Action</button>
      </CardFooter>
    </Card>
  ),
};

// Card with longer content
export const WithLongContent: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Long Content</CardTitle>
        <CardDescription>
          A detailed description about the card content goes here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is a longer content section. You can add any text or even
          elements inside the content. It is useful for cases where you want to
          provide more details or examples.
        </p>
      </CardContent>
      <CardFooter>
        <button className="btn-secondary">Secondary Action</button>
      </CardFooter>
    </Card>
  ),
};

// Card without footer
export const WithoutFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>No Footer</CardTitle>
        <CardDescription>
          This card does not have a footer section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card only contains the header and content sections.</p>
      </CardContent>
    </Card>
  ),
};

// Card with only header
export const OnlyHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Only Header</CardTitle>
        <CardDescription>
          This card only contains the header section.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

// Card with custom footer content
export const CustomFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Custom Footer</CardTitle>
        <CardDescription>
          This card has a custom footer section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card content is followed by a custom footer content.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          © 2024 Company Name. All rights reserved.
        </p>
      </CardFooter>
    </Card>
  ),
};
