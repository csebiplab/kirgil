import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./ProjectDesigns.css";

const ProjectDesigns = () => {
  return (
    <div>
      <div className="full__section_l_p common__padding__top">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.projectDesigns__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-[35px] font-bold text-black md:text-start text-center">
              Elevating Every
              <br />{" "}
              <span className="text-primary"> Project Through Designs</span>
            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
              At our company, we believe in the transformative power of design.
              With a commitment to excellence, we elevate every project through
              our innovative and thoughtful designs. Whether creating
              captivating branding identities, crafting user-friendly
              interfaces, or developing visually stunning architectural plans,
              we infuse creativity and expertise into every aspect of our work.
              Our team of skilled designers collaborates closely with clients to
              understand their vision and goals, ensuring that each project
              reflects their unique identity and resonates with their target
              audience. From concept to completion, we strive to exceed
              expectations and deliver exceptional results that inspire and
              engage. Kirgil Stucco Design is the best choice where design meets
              excellence.
            </p>
          </div>
          <div className=" md:col-span-4 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Project_Through_Designs.png"
                width={964}
                height={532}
                alt="ProjectDesigns image"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesigns;
