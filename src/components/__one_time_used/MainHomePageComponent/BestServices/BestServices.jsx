import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const BestServices = () => {
  return (
    <div className="">
      <div className=" bg-[#FFF9EE]">
        <div className=" container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] common__padding__top">
            <div className="md:col-span-3 flex justify-center items-center">
              <div className="">
                <Image
                  src="/assets/images/Best_Service_Company.png"
                  width={620}
                  height={510}
                  alt="best services image"
                  className="w-dvw md:h-[800px] lg:h-[840px] xl:h-auto 2xl:h-full "
                  
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.bestServices__IconTxt} />
              </div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
                Best Remodeling & Construction{" "}
                <span className="text-primary">Services Company</span>
              </p>
              <p className="text-[18px] font-normal leading-[35px] text-center md:text-left">
                National Remodelling & General Contracting Inc. stands as a
                beacon of excellence in the realm of home renovation and
                construction services. With a commitment to quality
                craftsmanship and client satisfaction, we transform spaces into
                stunning showcases of innovation and style. Our team of seasoned
                professionals brings expertise in every facet of remodeling,
                from intricate design concepts to flawless execution. Whether
                it's a small-scale renovation or a large-scale construction
                project, we approach each endeavor with precision and care,
                ensuring unparalleled results that exceed expectations. With a
                focus on communication and collaboration, we work closely with
                clients to bring their visions to life, creating homes that are
                both functional and aesthetically breathtaking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
