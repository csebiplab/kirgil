import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./ProjectUs.css"

const ProjectUs = () => {
  return (
    <div className="bg__color">
      <div className="full__section_r_p">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 common__padding__top">
          <div className="md:col-span-4 flex items-center ">
            <div className="">
              <Image
                src="/assets/images/projectUs.png"
                width={940}
                height={580}
                alt="project us image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.projectUs__IconTxt} />
            </div>
            <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
            Start Your Project with Our <span className="text-primary">General Contractor Toronto</span>
            </p>
            <p className=" 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              
            Our seasoned team brings expertise, reliability, and a passion for craftsmanship to every project, ensuring your vision becomes reality. From residential remodels to commercial renovations, we handle every aspect with precision and care, delivering superior results that exceed expectations. Contact us today to discuss your project goals and let us be your trusted partner in transforming your space into something extraordinary. Trust us to transform your space into a stunning reflection of your style and functionality needs. Let us transform your space into the perfect blend of functionality and aesthetics.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUs;
