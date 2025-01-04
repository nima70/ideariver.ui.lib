import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc";

export interface Blog {
  raw: string;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontMatter: FrontMatter;
}

export type FrontMatter = {
  id: string;
  title: string;
  icon: string;
  coverPhoto?: string;
  date?: string;
  author?: string;
  description?: string;
};

export const serializeMdxFile = async (file: string, dirPath: string) => {
  console.log(file, dirPath);
  const filePath = path.join(process.cwd(), dirPath, `${file}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return {
    raw: content,
    source: mdxSource,
    frontMatter: data as FrontMatter,
  };
};

export const listMdxFiles = async (dirPath: string) => {
  const servicesDir = path.join(process.cwd(), dirPath);
  console.log(servicesDir);
  const filenames = fs.readdirSync(servicesDir);
  return filenames.map((filename) => ({
    file: filename.replace(/\.mdx$/, ""),
  }));
};

export const getBlogs = async (): Promise<Blog[]> => {
  const params = await listMdxFiles("public/blogs");
  let blogs: Blog[] = [];
  await Promise.all(
    params.map(async (param) => {
      const blogData = await serializeMdxFile(param.file, "public/blogs");
      blogs.push(blogData);
    })
  );
  return blogs;
};
