// src/components/BlogGalleryUI.tsx

import React from "react";
import BlogCard from "@/lib/components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/lib/components/ui/pagination";

export interface BlogGalleryUIProps {
  currentPage: number;
  totalPages: number;
  blogs: {
    title: string;
    date?: string;
    description?: string;
    coverPhoto?: string;
    id: string;
  }[];
}

const BlogGalleryUI = ({
  currentPage,
  totalPages,
  blogs,
}: BlogGalleryUIProps) => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section className="flex flex-col flex-grow items-center justify-center bg-card py-16 w-full">
        <div className="container mx-auto px-6 text-center w-full flex-grow">
          <h1 className="text-4xl font-bold mb-24 text-foreground  md:mb-8 ">
            Blog Gallery
          </h1>
          <div className="flex flex-col items-center space-y-4">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                coverPhoto={blog.coverPhoto}
                href={`/pages/blogs/${blog.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-card py-4">
        <Pagination className="flex justify-center">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={`/pages/blog-gallery/${Math.max(currentPage - 1, 1)}`}
                />
              </PaginationItem>
            )}
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/pages/blog-gallery/${i + 1}`}
                  className={i + 1 === currentPage ? "active" : ""}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  href={`/pages/blog-gallery/${Math.min(
                    currentPage + 1,
                    totalPages
                  )}`}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};

export default BlogGalleryUI;
