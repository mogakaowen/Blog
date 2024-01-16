import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" "); // this is a utility function that takes in an array of classNames and returns a string of classNames separated by a space. It filters out any falsy values (undefined, null, false, 0, "", NaN) before joining them together.

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
