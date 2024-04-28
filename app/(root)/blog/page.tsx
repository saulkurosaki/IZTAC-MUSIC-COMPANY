import Header from "@/components/blog/Header";
import Navbar from "@/components/blog/Navbar";

const BlogPage = () => {
  return (
    <div className="relative bg-[#2e2414] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-[57px]">
      <Header />

      <Navbar />
    </div>
  );
};

export default BlogPage;
