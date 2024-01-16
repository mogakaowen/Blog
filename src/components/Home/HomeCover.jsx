import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sortBlogs } from "@/src/utils";
import Tag from "@/src/components/Elements/Tag";

const HomeCover = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const coverBlog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className=" flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-10 w-full h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0" />
        <Image
          src={coverBlog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={coverBlog.image.blurhashDataUrl}
          alt={coverBlog.title}
          fill
          className="w-full h-full rounded-3xl -z-10 object-cover object-center"
        />

        <div className="w-3/4 p-16 flex flex-col items-start justify-content z-0 text-light">
          <Tag
            link={`/categories/${coverBlog.tags[0]}`}
            name={coverBlog.tags[0]}
          />
          <Link href={coverBlog.url} className="mt-6">
            <h1 className="text-5xl font-bold capitalize ">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {coverBlog.title}
              </span>
            </h1>
          </Link>
          <p className="text-xl mt-4">{coverBlog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default HomeCover;
