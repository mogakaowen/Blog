import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

const BlogLayoutTwo = ({ featuredBlog3 }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark">
      <Link
        href={featuredBlog3.url}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={featuredBlog3.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={featuredBlog3.image.blurhashDataUrl}
          alt={featuredBlog3.title}
          width={featuredBlog3.image.width}
          height={featuredBlog3.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>

      <div className="col-span-8 w-full">
        <span className="uppercase text-accent font-semibold text-sm">
          {featuredBlog3.tags[0]}
        </span>
        <Link href={featuredBlog3.url} className="inline-block my-1">
          <h2 className="text-xl font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {featuredBlog3.title}
            </span>
          </h2>
        </Link>

        <h4 className="capitalize text-dark/50 font-semi-bold text-base">
          {format(new Date(featuredBlog3.publishedAt), "MMMM dd, yyyy")}
        </h4>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
