import Image from "next/image";
import Link from "next/link";
import Tag from "@/src/components/Elements/Tag";

const BlogLayoutOne = ({ featuredBlog1 }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-10" />
      <Image
        src={featuredBlog1.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={featuredBlog1.image.blurhashDataUrl}
        alt={featuredBlog1.title}
        width={featuredBlog1.image.width}
        height={featuredBlog1.image.height}
        className="w-full h-full rounded-xl object-cover object-center"
      />

      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`/categories/${featuredBlog1.tags[0]}`}
          name={featuredBlog1.tags[0]}
          className="px-6 text-sm py-2 !border"
        />
        <Link href={featuredBlog1.url} className="mt-6">
          <h2 className="text-2xl font-bold capitalize text-light mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {featuredBlog1.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
