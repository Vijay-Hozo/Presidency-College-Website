import { school } from "../constants/content";

const BSchool = () => {
  return (
    <div className="mx-16 py-14">
      <p className="text-[56px] m-10 font-semibold leading-[70px] tracking-tight ml-10">
        Apply to be a part of a <br /> renowned B School
      </p>

      <div className="flex-center gap-4 mt-8 py-6">
        {school.map((school) => (
          <div
            key={school.id}
            className="flex-center flex-col gap-3 text-center w-[300px] h-[430px] rounded-2xl  shadow-[3px_4px_5.2px_rgba(0,0,0,0.25)] px-6"
          >
            <p className={`text-[${school.color}] text-[60px]  font-semibold`}>
              {school.rank}
            </p>
            <p className="text-[24px] font-medium leading-[29px]">
              {school.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BSchool;
