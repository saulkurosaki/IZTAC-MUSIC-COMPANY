import Footer from "@/components/Footer";
import Navbar from "@/components/blog/Navbar";
import Header from "@/components/blog/recognitions/Header";
import RecognitionsPosts from "@/components/blog/recognitions/RecognitionsPosts";

const RecognitionsPage = () => {
  return (
    <div className="relative bg-[#fff] w-full h-full max-md:pt-14 md:pt-[70px] xl:pt-14 lg:pt-14">
      <Header />

      <Navbar category="recognitions" />

      <RecognitionsPosts />

      <Footer />
    </div>
  );
};

export default RecognitionsPage;
