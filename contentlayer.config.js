import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regularExpression = /\n(?<flag>#{1,6})\s(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(
          doc.body.raw.matchAll(regularExpression)
        ).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;

          return {
            level:
              flag?.length === 1
                ? "one"
                : flag?.length === 2
                ? "two"
                : flag?.length === 3
                ? "three"
                : flag?.length === 4
                ? "four"
                : flag?.length === 5
                ? "five"
                : "six",
            text: content,
            slug: content ? slugger.slug(content) : "",
          };
        });

        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "dracula",
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm], // enable GitHub Flavored Markdown for tables
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutoLinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ], // enable rehype slug for auto-generating heading IDs and rehype autolink headings for auto-generating heading links, and append the links to the headings
  },
});
