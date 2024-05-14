import check from "../assets/images/checked.png";

const Scholarship = () => {
  return (
    <div className="mx-16 py-14">
      <div className="m-6">
        <p className="text-[56px] leading-[35px] font-semibold border-b-[10px] border-yellow w-max">
          Scholarship program
        </p>
        <p className="text-[22px] font-medium py-3">
          Where Passion Meets Purpose: Secure Your Future with Our Scholarships.
        </p>
      </div>

      <img
        src={check}
        alt=""
        className="h-[580px] border-1 border-blue py-8 w-full"
      />

      <div className="flex-center flex-col gap-10">
        <p className="font-medium text-center text-[20px] w-[70%]">
          The college will provide around 30% of scholarships to some brilliant{" "}
          <br />
          students on all courses offered by the college
        </p>
        <button className="w-[180px] h-[43px] rounded-2xl shadow-xl bg-orange font-semibold text-white text-center ">
          More Details
        </button>
      </div>
    </div>
  );
};

export default Scholarship;
