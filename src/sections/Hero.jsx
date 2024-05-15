import rightArrow from "../assets/icons/right-arrow.svg";
import img from "../assets/images/Hero_img.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-14 pt-10">
      {/**Hero Left */}
      <div className="pl-12">
        <div className="tracking-tight text-[64px] font-[600] leading-[74px] mb-4">
          <p className="w-full">
            Let’s start your <br />
            education journey at
          </p>
          <div className="py-2">
            <p className="tracking-wide border-b-[10px] border-b-yellow leading-[42px]">
              Presidency College
            </p>
          </div>
        </div>
        <div>
          <p className="text-[16px] leading-[19.5px] font-[500]">
            Figma ipsum component variant main layer. Vector horizontal union
            <br /> frame device inspect ipsum flatten blur. Slice vertical
            vector scrolling <br /> style ellipse horizontal rectangle arrow
            shadow.
          </p>
        </div>
        <div className="p-2 h-12 flex justify-between bg-orange w-48 mt-14 rounded-full">
          <button className="text-center w-full text-white font-semibold">
            Get started
          </button>
          <img src={rightArrow} alt="" />
        </div>
      </div>
      {/* Hero Right */}\
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
