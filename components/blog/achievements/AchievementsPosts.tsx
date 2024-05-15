import { allBlogPosts } from "@/lib/constants";
import BlogCard from "../BlogCard";

const AchievementsPosts = () => {
  return (
    <section className="w-full h-auto">
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] max-md:w-full h-full px-0 py-6">
        <div className="w-full h-full flex flex-wrap">
          {allBlogPosts
            .filter((post) => post.achievement === "goals")
            .map((post, index) => (
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

export default AchievementsPosts;
