import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className="inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative">
              <div className="grid grid-cols-12 gap-4 items-center text-dark">
                <Link
                  href={blog.url}
                  className="col-span-4 h-full rounded-xl overflow-hidden"
                >
                  <Image
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    width={blog.image.width}
                    height={blog.image.height}
                    className="aspect-square w-full h-full object-cover object-center"
                  />
                </Link>

                <div className="col-span-8 w-full">
                  <span className="uppercase text-accent font-semibold text-sm">
                    {blog.tags[0]}
                  </span>
                  <Link href={blog.url} className="inline-block my-1">
                    <h2 className="text-xl font-semibold capitalize">
                      <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                        {blog.title}
                      </span>
                    </h2>
                  </Link>

                  <h4 className="capitalize text-dark/50 font-semi-bold text-base">
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
