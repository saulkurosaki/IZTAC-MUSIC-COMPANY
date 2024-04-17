import ServiceCard from "./home/ServiceCard";
import { services } from "@/lib/constants";

const OurServicesSection = () => (
  <section className="w-full xl:h-[775px] lg:h-[714px] md:h-[2815px] max-md:h-[1995px] bg-[#B99253] py-8">
    <div className="container xl:w-[1320px] lg:w-[960px] md:w-[720px] h-full px-0">
      <div className="flex w-full h-full max-lg:flex-col items-stretch">
        <ServiceCard
          image={services.coaching.image}
          title={services.coaching.title}
          description={services.coaching.description}
        />

        <ServiceCard
          image={services.composition.image}
          title={services.composition.title}
          description={services.composition.description}
        />

        <ServiceCard
          image={services.mastery.image}
          title={services.mastery.title}
          description={services.mastery.description}
        />
      </div>
    </div>
  </section>
);

export default OurServicesSection;
