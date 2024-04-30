import { allBlogPosts } from "@/lib/constants";
import BlogCard from "./BlogCard";

const BlogPosts = () => {
  return (
    <section className="w-full xl:h-[1181px] lg:h-[1541px] max-lg:h-[1525px]">
      <div className="container xl:w-[1320px] lg:w-[960px] max-lg:w-[720px] h-full px-0 py-6">
        <div className="w-full h-full flex flex-wrap">
          {allBlogPosts.map((post, index) => (
            <BlogCard
              key={`card_${index + 1}`}
              author={post.author}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
              achievement={post.achievement}
              url={post.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
