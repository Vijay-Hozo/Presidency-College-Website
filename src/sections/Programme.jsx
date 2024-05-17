import poster1 from "../assets/images/poster-1.png";
import poster2 from "../assets/images/poster-2.png";
import poster3 from "../assets/images/poster-3.png";
import poster4 from "../assets/images/poster-4.png";
import poster5 from "../assets/images/poster-5.png";

import arrow from "../assets/icons/right-arrow.svg";

const Programme = () => {
  return (
    <div className="mx-16 py-14">
      <div className="m-6 max-lg:text-center max-lg:flex-center max-lg:flex-col">
        <p className="text-[56px] max-lg:text-[42px] max-sm:text-[30px] leading-[35px] max-lg:leading-[28px] max-sm:leading-[20px] font-semibold border-b-[10px] max-sm:border-b-[6px] border-yellow w-max">
          Programme we offer
        </p>
        <p className="text-[22px] max-lg:text-[18px] max-sm:text-[12px] font-medium py-3">
          Our pragmatic approach teach you advanced skills with lots of personal
          support.
        </p>
      </div>

      <div className="max-lg:flex-center max-lg:flex-col">
        {/* Posters 1*/}
        <div className="bg-yellow flex max-lg:flex-col max-lg:items-center gap-12 items-end my-10 max-md:bg-blue">
          <div className="bg-blue w-[720px] h-[730px] max-lg:scale-75 rounded-2xl p-6 bg-[#FFDD81] mt-16 ml-10">
            <img
              src={poster1}
              alt="poster-1"
              className="w-full h-full  rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4 max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
            <p className="text-[48px]">B.com ACCA</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" />
              </button>
            </div>
          </div>

          {/* mobile */}
          <div className="bg-blue  hidden max-lg:block">
            <p className="text-[24px]">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
          </div>
        </div>
        {/* Posters 2*/}
        <div className="flex flex-row-reverse gap-12 items-end my-10">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-red mt-16 ml-10">
            <img
              src={poster2}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-yellow rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
            <p className="text-[48px]">B.com ACCA</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" />
              </button>
            </div>
          </div>
        </div>
        {/* Poster 3 */}
        <div className="flex gap-12 items-end my-10">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-blue mt-16 ml-10">
            <img
              src={poster3}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
            <p className="text-[48px]">B.com ACCA</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" />
              </button>
            </div>
          </div>
        </div>
        {/* Poster 4 */}
        <div className="flex flex-row-reverse gap-12 items-end my-10">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-blue mt-16 ml-10">
            <img
              src={poster4}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>

          <div className="max-lg:hidden">
            <div className="w-[350px] h-[350px] font-semibold text-white bg-yellow rounded-2xl flex flex-col justify-between py-8 p-8 m-4">
              <p className="text-[28px] leading-[38px] font-semibold">
                Master of Computer Application
              </p>
              <p className="text-[45px]">MCA</p>
              <div className="flex items-center justify-around gap-4">
                <p className="text-[28px]">Apply now</p>
                <button>
                  <img src={arrow} alt="" className="w-[70px]" />
                </button>
              </div>
            </div>

            <div className="w-[350px] h-[350px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4">
              <p className="text-[28px] leading-[38px] font-semibold">
                Master of Business Administration
              </p>
              <p className="text-[45px]">MBA</p>
              <div className="flex items-center justify-around gap-4">
                <p className="text-[28px]">Apply now</p>
                <button>
                  <img src={arrow} alt="" className="w-[70px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Poster 5 */}
        <div className="flex gap-12 items-end my-10">
          <div className="w-[720px] h-[730px] rounded-2xl p-6 bg-yellow mt-16 ml-10">
            <img
              src={poster5}
              alt="poster-1"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-[400px] h-[550px] font-semibold text-white bg-red rounded-2xl flex flex-col justify-between py-8 p-8 m-4  max-lg:hidden">
            <p className="text-[32px] leading-[38px] font-semibold">
              Bachelor of Commerce with Association of Chartered Certified
              Accountants (9 paper exemption)
            </p>
            <p className="text-[48px]">B.com ACCA</p>
            <div className="flex justify-around gap-4">
              <p className="text-[30px]">Apply now</p>
              <button>
                <img src={arrow} alt="" className="w-[70px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;
