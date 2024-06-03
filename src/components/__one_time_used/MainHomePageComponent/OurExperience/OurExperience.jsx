import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const OurExperience = () => {
  return (
    <div>
      <div className=" bg-[#FFF9EE]">
        <div className=" container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] common__padding__top">
            <div className="md:col-span-3 flex justify-center items-center ">
              <div className="">
                <Image
                  src="/assets/images/Our_Experience.png"
                  width={620}
                  height={510}
                  alt="Our Experience image"
                  className="w-dvw md:h-[550px] lg:h-[600px] xl:h-full "
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.ourExperience__IconTxt} />
              </div>
              <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
              Experienced General Contractors{" "}
                <span className="text-primary">in Toronto</span>
              </h3>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              National Remodelling & General Contracting Inc. is Toronto's premier choice for expert construction solutions. With over 15 years of experience, we've mastered the art of transforming spaces into stunning environments that exceed expectations. From residential renovations to commercial construction projects, our skilled team delivers top-notch craftsmanship and unparalleled attention to detail. Client satisfaction is our priority, and we pride ourselves on clear communication, timely completion, and budget adherence. Whether you're dreaming of a modern kitchen or a complete home makeover, trust National Remodelling & General Contracting Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
