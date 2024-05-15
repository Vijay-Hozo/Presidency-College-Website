import rightArrow from "../assets/icons/right-arrow-outline.svg";
import leftArrow from "../assets/icons/left-arrow-outline.svg";
import { blog } from "../constants/content";

const Blog = () => {
  return (
    <div className="mx-16 px-14">
      {/* Heading */}
      <div className="flex justify-between items-center">
        {/* Title */}
        <div>
          <p className="text-[40px] font-medium">Read Our Blog </p>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur..{" "}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button className="h-[60px] w-[60px] flex-center rounded-full border-[1px] border-[#B2B2B2] ">
            <img src={leftArrow} alt="" />
          </button>
          <button className="h-[60px] w-[60px] flex-center rounded-full bg-blue ">
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>

      {/* Blogs */}

      <div className="flex overflow-x-scroll hide-scroll-bar gap-2 my-16 p-8 pt-14">
        <div className="flex flex-nowrap gap-6">
          {blog.map((item) => (
            <div
              key={item.id}
              className="w-[400px] h-[350px] flex flex-col gap-2 m-2"
            >
              <div className=" ">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-2xl h-[200px]"
                />
              </div>
              <div className="">
                <p className="text-[24px] font-medium">{item.heading}</p>
                <div className="flex justify-between items-center">
                  <p className="w-[320px]">{item.desc}</p>
                  <button className="h-[60px] w-[60px] flex-center rounded-full bg-blue ">
                    <img src={rightArrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* BlogCard */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
