import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className=" bg-white">
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/About_Us.png"
                width={596}
                height={490}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.AboutUs__IconTxt} />
            </div>
            <p className="mt-4 lg:mb-[25px] mb-[15px] text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center">
            About Our Expert <br /> <span className="text-[#FB9401]">Stucco Contractor Toronto</span>

            </p>
            <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
            Our expert team specializes in high-quality stucco installation and repair services, catering to residential and commercial properties. With years of experience and a reputation for excellence, we are committed to delivering durable, aesthetically pleasing finishes that enhance the value and appearance of your building. Whether you need traditional stucco, EIFS (Exterior Insulation and Finish System), or decorative stucco moldings, we use premium materials and cutting-edge techniques to ensure long-lasting results. Our skilled craftsmen pay meticulous attention to detail, ensuring each project is completed on time and within budget.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;