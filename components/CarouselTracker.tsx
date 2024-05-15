import { CarouselApi } from "./ui/carousel";

type TrackerProps = {
  api: CarouselApi | undefined;
  current: number;
  isReferenceCard?: boolean;
};

const CarouselTracker = ({ api, current, isReferenceCard }: TrackerProps) => {
  return (
    <section
      className={`w-full h-4 relative ${
        isReferenceCard ? "bottom-10" : "bottom-11"
      } z-2 flex mb-[1rem] list-none justify-center gap-[6px]`}
    >
      <div
        onClick={() => {
          api && api.scrollTo(0);
        }}
        className={`w-4 h-4 bg-[#fff] ${
          current !== 1 ? "opacity-[0.5]" : "opacity-[1]"
        } rounded-full border-[1px] border-transparent cursor-pointer`}
      />
      <div
        onClick={() => {
          api && api.scrollTo(1);
        }}
        className={`w-4 h-4 bg-[#fff] ${
          current !== 2 ? "opacity-[0.5]" : "opacity-[1]"
        } rounded-full border-[1px] border-transparent cursor-pointer`}
      />
      <div
        onClick={() => {
          api && api.scrollTo(2);
        }}
        className={`w-4 h-4 bg-[#fff] ${
          current !== 3 ? "opacity-[0.5]" : "opacity-[1]"
        } rounded-full border-[1px] border-transparent cursor-pointer`}
      />
    </section>
  );
};

export default CarouselTracker;
