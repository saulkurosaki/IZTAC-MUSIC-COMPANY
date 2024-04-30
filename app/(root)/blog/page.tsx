import Footer from "@/components/Footer";
import BlogPosts from "@/components/blog/BlogPosts";
import Header from "@/components/blog/Header";
import Navbar from "@/components/blog/Navbar";

const BlogPage = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <Header />

      <Navbar />

      <BlogPosts />

      <Footer />
    </div>
  );
};

export default BlogPage;
