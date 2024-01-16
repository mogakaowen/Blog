import { allBlogs } from "../../.contentlayer/generated";
import HomeCover from "../components/Home/HomeCover";

export default function Home() {
  // console.log("allBlogs: ", allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover blogs={allBlogs} />
    </main>
  );
}
