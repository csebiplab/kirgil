import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const ReadyToWork = () => {
  return (
    <div className="">
      <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 md:gap-[30px]">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/images/Ready to Work with us.png"
                width={940}
                height={580}
                alt="project us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 pt-3 lg:pt-0 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.readyToWork__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-[35px] font-bold text-black md:text-start text-center">
            Ready To Start work with  <br />
              <span className="text-primary">
              Stucco Contractor Services in Toronto
              </span>
            </h3>
            <div className="flex justify-center md:justify-start pt-[35px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 text-lg font-bold flex justify-center items-center"
              >
                <span className="mr-2 text-white">
                Get Your Free Estimated
                </span>
              </button>
            </div>
            <p className="text-black text-2xl font-semibold leading-normal mt-4 text-center md:text-left">
            or Call Us: <span className="text-primary">(416) 994-4597</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToWork;
