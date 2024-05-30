import { AppBar } from "@/components/ui/appBar";
import { Avatar } from "@/components/ui/avatar";
import { useBlog } from "@/hooks";

export const Blog = () => {
  const { loading, blog } = useBlog();

  if (loading || !blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-3 pt-10 px-5">
        <div className="col-span-2">
          <div className="font-extrabold text-5xl">
            {blog.title}
          </div>
          <div className="pt-5 text-gray-500">
            Posted on December 20, 2023
          </div>
          <div className="fond-md pt-5">
            {blog.content}
          </div>
        </div>
        <div className="pl-10 col-span-1">
          <div>
            Author
          </div>
          <div className="grid grid-cols-7 pt-2">
            <div className="col-span-1 pt-5">
              <Avatar size="small" />
            </div>
            <div className="col-span-6">
              <div className="font-bold text-lg">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="text-gray-400 pt-2">
                Master of mirth, purveyor of puns, and the funniest person in the kingdom.
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}