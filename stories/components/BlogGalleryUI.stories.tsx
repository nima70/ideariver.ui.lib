// src/components/BlogGalleryUI.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import BlogGalleryUI, {
  BlogGalleryUIProps,
} from "../../components/BlogGalleryUI"; // Import the component and the prop types

// Define the metadata for the story
const meta: Meta<typeof BlogGalleryUI> = {
  title: "Components/BlogGalleryUI",
  component: BlogGalleryUI,
  argTypes: {
    currentPage: { control: "number" },
    totalPages: { control: "number" },
    blogs: { control: "object" },
  },
};

export default meta; // Export the metadata

// Define the story object type
type Story = StoryObj<BlogGalleryUIProps>;

// Page 1 story
export const PageOne: Story = {
  args: {
    currentPage: 1,
    totalPages: 2, // Assume 2 pages of blog posts
    blogs: [
      {
        title: "AI in Marketing",
        date: "2024-09-29",
        description: "Explore how AI is transforming marketing strategies.",
        coverPhoto: "coverPhotos/ai-icon.jpg",
        id: "ai-marketing",
      },
      {
        title: "Content Marketing Tips",
        date: "2024-09-28",
        description:
          "Learn how to create effective content marketing strategies.",
        coverPhoto: "coverPhotos/content-marketing-icon.jpg",
        id: "content-marketing-tips",
      },
      {
        title: "SEO Best Practices",
        date: "2024-09-27",
        description: "A guide to effective SEO strategies.",
        coverPhoto: "coverPhotos/seo-icon.jpg",
        id: "seo-best-practices",
      },
    ],
  },
};

// Page 2 story
export const PageTwo: Story = {
  args: {
    currentPage: 2,
    totalPages: 2, // Assume 2 pages of blog posts
    blogs: [
      {
        title: "Social Media Strategy",
        date: "2024-09-26",
        description:
          "Boost your brand presence with a solid social media strategy.",
        coverPhoto: "coverPhotos/social-media-icon.jpg",
        id: "social-media-strategy",
      },
      {
        title: "Video Marketing Trends",
        date: "2024-09-25",
        description: "Discover the latest trends in video marketing.",
        coverPhoto: "coverPhotos/video-marketing-icon.jpg",
        id: "video-marketing-trends",
      },
      {
        title: "Voice Search Optimization",
        date: "2024-09-24",
        description:
          "Optimize your content for voice search to reach a broader audience.",
        coverPhoto: "coverPhotos/voice-search-icon.jpg",
        id: "voice-search-optimization",
      },
    ],
  },
};
