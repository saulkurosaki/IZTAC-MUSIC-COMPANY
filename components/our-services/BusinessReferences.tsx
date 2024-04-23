import Image from "next/image";

import Reference_1 from "../../assets/business_references_img_1.svg";
import Reference_2 from "../../assets/business_references_img_2.svg";
import Reference_3 from "../../assets/business_references_img_3.svg";
import Reference_4 from "../../assets/business_references_img_4.svg";
import Reference_5 from "../../assets/business_references_img_5.svg";
import Reference_6 from "../../assets/business_references_img_6.svg";

const BusinessReferences = () => {
  return (
    <section className="w-full h-[380px] bg-white pt-12 pb-8">
      <div className="container w-[1320px] h-full px-[15px] flex flex-col">
        <div className="w-full h-[150px] flex flex-col">
          <h2 className="w-full h-[70px] text-[42px] oxygen flex items-center justify-center">
            Nuestras Referencias
          </h2>
          <p className="w-full h-[30px] text-lg oxygen text-[#7a7a7a] flex items-center justify-center">
            Algunas de las empresas con las que hemos colaborado.
          </p>
        </div>
        {/* <div className="w-full h-[150px] flex pb-12">
          <Image
            src={Reference_1}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
          <Image
            src={Reference_2}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
          <Image
            src={Reference_3}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
          <Image
            src={Reference_4}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
          <Image
            src={Reference_5}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
          <Image
            src={Reference_6}
            alt="reference_image"
            width={215}
            className="object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};

export default BusinessReferences;
