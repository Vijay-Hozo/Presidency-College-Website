/* eslint-disable react/no-unknown-property */
import rank from "../assets/images/ranked.png";
import { milestones, ranked } from "../constants/content";

const Rank = () => {
  return (
    <div className="p-14 px-16 pb-[40px] mt-16">
      {/* 11 Rank */}
      <div className="p-10 py-16 flex flex-col text-white  w-full bg-yellow rounded-2xl">
        <div className="flex gap-2 items-baseline">
          <p className="text-[150px] leading-[100px] font-[600] ">Ranked#11</p>
          <img src={rank} alt="" className="" />
        </div>
        <p className="text-[36px] font-[500] leading-[50px] p-2">
          India’s Top-ranked private autonomous ASC colleges (2024)
        </p>
      </div>
      {/* Ranked Marquee */}
      <div className="bg-blue text-white my-8 rounded-2xl">
        <marquee direction="right" scrollamount="30">
          <div className="flex gap-14 py-10">
            {ranked.map((rank) => (
              <div key={rank.rank} className="m-2 w-96  border-2 border-yellow">
                <h2 className="text-[64px] font-bold ">{rank.rank}</h2>
                <p className="text-[24px] font-normal">{rank.desc}</p>
              </div>
            ))}
          </div>
        </marquee>
      </div>
      {/* Milestones */}
      <div className="flex gap-4 py-10">
        {milestones.map((milestone) => (
          <div key={milestone}>
            <img src={milestone.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rank;
