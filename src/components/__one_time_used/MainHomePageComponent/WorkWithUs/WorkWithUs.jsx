import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./WorkWithUs.css";

const WorkWithUs = () => {
  return (
    <div>
      <div className=" container">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Work_With_us.png"
                width={680}
                height={495}
                alt="about us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-4 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.workWithUs__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-dark md:text-start text-center">
              Start With Our
              <br />{" "}
              <span className="text-[#FB9401]">Stucco Contractor Toronto</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
              Our stucco contractors in Toronto prioritize quality materials and
              precise application techniques to ensure long-lasting and
              resilient finishes. We understand the unique climate challenges of
              the region and select plaster solutions that withstand the
              elements while maintaining their aesthetic appeal. Whether it's a
              small repair or a large-scale project, we approach each job with
              professionalism and dedication, striving to exceed expectations
              every step of the way. Count on us for reliable service,
              transparent communication, and results that elevate your
              property's curb appeal. Transform your space with confidence,
              backed by our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
