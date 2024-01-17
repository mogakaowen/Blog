import { allBlogs } from "../../.contentlayer/generated";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import HomeCover from "../components/Home/HomeCover";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  // console.log("allBlogs: ", allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
