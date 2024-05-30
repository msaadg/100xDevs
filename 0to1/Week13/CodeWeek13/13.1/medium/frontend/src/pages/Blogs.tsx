import { AppBar } from "@/components/ui/appBar";
import { BlogCard } from "@/components/ui/blogCard";
import { useBlogs } from "@/hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppBar />
      <div className="px-20 md:px-30 lg:px-35">
        {blogs.map(blog => (
          <BlogCard
            firstName={blog.author.name != null ? blog.author.name.split(" ")[0] : "Anonymous"}
            lastName={blog.author.name != null && blog.author.name.split(" ").length > 1 ? blog.author.name.split(" ")[1] : ""}
            date={"Dec 20, 2023"}
            heading={blog.title}
            content={blog.content}
            id={blog.id}
          />
        ))}
        {/* <BlogCard firstName="Muhammad" lastName="Saad" date="Dec 3, 2022" heading="heading" content="this is the content" />
        <BlogCard firstName="Muhammad" lastName="Saad" date="Dec 3, 2022" heading="heading" content="this is the content" /> */}
      </div>
    </div>
  );
};