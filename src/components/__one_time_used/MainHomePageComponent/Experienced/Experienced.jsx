import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./Experienced.css";

const Experienced = () => {
  return (
    <div>
      <div className=" container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Experienced.png"
                width={680}
                height={495}
                alt="Experienced image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.experienced__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-dark md:text-start text-center">
            Toronto's Experienced  <br /> <span className="text-[#FB9401]">Stucco Contractor</span>

            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            With years of proven expertise in the industry, we specialize in enhancing the aesthetic appeal and durability of homes and businesses across the Greater Toronto Area. From traditional to modern styles, our skilled artisans deliver flawless stucco application, repair, and restoration services tailored to your unique vision and needs. We prioritize quality craftsmanship, using premium materials and techniques to ensure long-lasting results that stand the test of time and weather. Whether you're renovating, building anew, or simply seeking to refresh your exterior, trust our reliable and dedicated professionals to bring your stucco dreams to life.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienced;