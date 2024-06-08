import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const ReadyToWork = () => {
  return (
    <div className="">
      <div className="full__section_r_p common__padding__top">
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

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.readyToWork__IconTxt} />
            </div>
            <p className="text-black text-3xl md:text-4xl font-medium leading-normal not-italic text-center md:text-left pt-[10px]">
            Ready To Start work with  <br />
              <span className="text-primary">
              Stucco Contractor Services in Toronto
              </span>
            </p>
            <div className="flex justify-center md:justify-start pt-[35px]">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 lg:px-10 py-2 font-semibold flex justify-center items-center"
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
