// src/components/BlogCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  coverPhoto?: string;
  date?: string;
  description?: string;
  href: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  coverPhoto,
  href,
  date,
  description,
}) => {
  const truncateText = (maxLength: number, text?: string) => {
    if (text === undefined) return "";
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Link href={href} className="w-full px-2 h-96 md:h-60">
      <div className="bg-card text-card-foreground w-full h-full p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col-reverse md:flex-row items-center">
        <div className="text-2xl font-bold flex-grow text-center md:text-left flex flex-col space-y-4 ">
          <h2 className="align-text-top ">{title}</h2>

          <p className="text-muted-foreground text-lg">
            {truncateText(150, description)}
          </p>
          <p className="text-muted-foreground text-sm">{date}</p>
        </div>
        {coverPhoto && (
          <div className="relative  w-full  h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden   md:mt-0 md:ml-4">
            <Image
              src={coverPhoto}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg pb-4 pt-2 md:pt-0 md:pb-0"
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
