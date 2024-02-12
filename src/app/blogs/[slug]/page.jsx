import { allBlogs } from "@/.contentlayer/generated";
import React from "react";
import Tag from "../../../components/Elements/Tag";
import Image from "next/image";
import { format } from "date-fns";

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={"/categories/${blog.tags[0]}"}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block mt-6 text-5xl font-seminold capitalize text-light leading-normal relative w-5/6">
            {blog.title}
          </h1>
          <p className="text-light mt-2">
            {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60">
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className="aspect-square w-full h-full object-cover object-center "
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPage;
