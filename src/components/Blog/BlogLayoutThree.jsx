import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutThree = ({ recentBlog }) => {
  return (
    <div className="group flex flex-col items-center text-dark">
      <Link
        href={recentBlog.url}
        className=" h-full rounded-xl overflow-hidden"
      >
        <Image
          src={recentBlog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={recentBlog.image.blurhashDataUrl}
          alt={recentBlog.title}
          width={recentBlog.image.width}
          height={recentBlog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent font-semibold text-sm">
          {recentBlog.tags[0]}
        </span>
        <Link href={recentBlog.url} className="inline-block my-1">
          <h2 className="text-xl font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {recentBlog.title}
            </span>
          </h2>
        </Link>

        <h4 className="capitalize text-dark/50 font-semi-bold text-base">
          {format(new Date(recentBlog.publishedAt), "MMMM dd, yyyy")}
        </h4>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
