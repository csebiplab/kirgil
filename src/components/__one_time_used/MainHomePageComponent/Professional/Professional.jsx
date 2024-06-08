import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./Professional.css";

const Professional = () => {
  return (
    <div>
      <div className=" container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Professional.png"
                width={680}
                height={495}
                alt="Professional image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.professional__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-dark md:text-start text-center">
            About Our Expert <br /> <span className="text-[#FB9401]">Stucco Contractor Toronto</span>

            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Our expert team specializes in high-quality stucco installation and repair services, catering to residential and commercial properties. With years of experience and a reputation for excellence, we are committed to delivering durable, aesthetically pleasing finishes that enhance the value and appearance of your building. Whether you need traditional stucco, EIFS (Exterior Insulation and Finish System), or decorative stucco moldings, we use premium materials and cutting-edge techniques to ensure long-lasting results. Our skilled craftsmen pay meticulous attention to detail, ensuring each project is completed on time and within budget.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;