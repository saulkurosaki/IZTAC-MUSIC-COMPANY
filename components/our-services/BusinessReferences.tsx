import Image from "next/image";

import Reference_1 from "../../assets/business_references_img_1.svg";
import Reference_2 from "../../assets/business_references_img_2.svg";
import Reference_3 from "../../assets/business_references_img_3.svg";
import Reference_4 from "../../assets/business_references_img_4.svg";
import Reference_5 from "../../assets/business_references_img_5.svg";
import Reference_6 from "../../assets/business_references_img_6.svg";

const BusinessReferences = () => {
  return (
    <section className="w-full lg:h-[380px] md:h-[1425px] bg-white pt-12 pb-8">
      <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full max-lg:h-[1335px] px-[15px] flex flex-col">
        <div className="w-full h-[150px] flex flex-col max-lg:mb-10">
          <h2 className="w-full h-[70px] md:text-[42px] max-md:text-3xl oxygen flex items-center justify-center">
            Nuestras Referencias
          </h2>
          <p className="w-full h-[30px] md:text-lg max-md:text-base oxygen text-[#7a7a7a] text-center">
            Algunas de las empresas con las que hemos colaborado.
          </p>
        </div>
        <div className="w-full h-[150px] max-lg:h-[1240px] flex max-lg:flex-col pb-12">
          <Image
            src={Reference_1}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
          <Image
            src={Reference_2}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
          <Image
            src={Reference_3}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
          <Image
            src={Reference_4}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
          <Image
            src={Reference_5}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
          <Image
            src={Reference_6}
            alt="reference_image"
            className="xl:w-[215px] lg:w-[155px] max-lg:w-full h-full max-lg:h-[199px] max-lg:py-7 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessReferences;
