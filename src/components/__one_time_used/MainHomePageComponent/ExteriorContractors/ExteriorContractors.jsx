import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./ExteriorContractors.css"

const ExteriorContractors = () => {
  return (
    <div>
      <div className=" container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="order-2 md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Exterior_Contractors.png"
                width={680}
                height={495}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.exteriorContractors__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-dark md:text-start text-center">
            Exterior Stucco Contractors <br /> <span className="text-[#FB9401]"> Toronto</span>

            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Our exterior stucco contractors in Toronto specialize in enhancing the aesthetic appeal and durability of residential and commercial properties through expert stucco application. With years of experience and a commitment to quality craftsmanship, our contractors offer a range of services including stucco installation, repair, and restoration. We understand the unique climate challenges of Toronto and utilize the latest techniques and materials to ensure long-lasting results. From traditional to modern designs, we work closely with clients to bring their vision to life while also providing valuable advice and recommendations. Whether it's a new construction project or a renovation, our exterior stucco contractors prioritize customer satisfaction, attention to detail, and timely completion.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExteriorContractors;