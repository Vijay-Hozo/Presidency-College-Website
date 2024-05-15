import { post } from "../constants/content";
import insta from "../assets/icons/instagram.svg";

const CampusLife = () => {
  return (
    <div className="mt-[100px] p-16">
      <p className="text-[56px] w- leading-[35px] font-semibold border-b-[10px] border-yellow w-[500px]">
        Campus Life
      </p>
      <p className="py-2 text-[56px] font-medium w-[620px]">
        An international community in the heart of Bengaluru
      </p>
      <p className="text-[36px] mb-10 leading-[43px] font-normal w-[998px]">
        Presidency College (Autonomous) <br /> (Re-Accredited by NAAC with A+
        Grade) boast of its green and clean campus which infuses positive vibes
        throughout.
      </p>

      {/* Posts */}
      <div className="py-16 w-full">
        <div className=" flex-center flex-wrap ">
          {post.map((item) => (
            <div key={item.id} className="m-2 relative w-[350px] h-[378px] ">
              <img
                src={item.image}
                alt="post"
                className="m-2 h-full w-full z-10 overflow-hidden"
              />
              <div className="absolute bottom-2 left-6 z-0 flex gap-2 items-center">
                <img className="" src={insta} alt="username" />
                <p className="text-[#00000080]">@username</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-center w-full p-6">
          <button className="h-12 w-32 text-center p-2 rounded-full text-white font-semibold  bg-orange">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
