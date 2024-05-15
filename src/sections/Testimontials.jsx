import TestimonialCard from "../components/TestimonialCard";
import { profile, recruiters } from "../constants/content";
import recruitImg from "../assets/images/recruiters.png";

const Testimontials = () => {
  return (
    <div className="mx-16 py-14">
      <div className="ml-12">
        <p className="text-[56px] leading-[35px] font-semibold border-b-[10px] border-yellow w-max">
          What graduates
        </p>
        <p className="mt-4 text-[56px] leading-[35px] font-semibold">
          say about us
        </p>
      </div>

      <div className="flex overflow-x-scroll hide-scroll-bar gap-2 my-16 p-8 pt-14 bg-blue text-white rounded-2xl">
        <div className="flex flex-nowrap gap-6">
          {profile.map((item) => (
            <TestimonialCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      <p className="mt-16 p-8 text-[60px] font-semibold text-center">
        Top recruiters
      </p>
      <div className="py-[70px] h-[80px] flex items-center justify-around border-y-[#B2B2B2] border-y-[1px]">
        {recruiters.map((src) => (
          <img src={src} alt="Top recruiters" className="h-[50px]" key={src} />
        ))}
      </div>
      <img src={recruitImg} alt="Top recruiters" />
    </div>
  );
};

export default Testimontials;
