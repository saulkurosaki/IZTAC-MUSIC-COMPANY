import Navbar from "@/components/blog/Navbar";
import Header from "@/components/blog/recognitions/Header";

const RecognitionsPage = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <Header />

      <Navbar category="recognitions" />
    </div>
  );
};

export default RecognitionsPage;