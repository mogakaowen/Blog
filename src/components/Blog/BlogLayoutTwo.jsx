import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutTwo = ({ featuredBlog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={featuredBlog.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={featuredBlog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={featuredBlog.image.blurhashDataUrl}
          alt={featuredBlog.title}
          width={featuredBlog.image.width}
          height={featuredBlog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="col-span-8 w-full">
        <span className="uppercase text-accent font-semibold text-sm">
          {featuredBlog.tags[0]}
        </span>
        <Link href={featuredBlog.url} className="inline-block my-1">
          <h2 className="text-xl font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {featuredBlog.title}
            </span>
          </h2>
        </Link>

        <h4 className="capitalize text-dark/50 font-semi-bold text-base">
          {format(new Date(featuredBlog.publishedAt), "MMMM dd, yyyy")}
        </h4>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
