import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const Quality = () => {
  return (
    <div>
      <div className=" bg-[#FFF9EE]">
        <div className=" container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] common__padding__top">
            
            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.quality__IconTxt} />
              </div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
              Quality General Contractors{" "}
                <span className="text-primary">in Toronto</span>
              </p>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              National Remodelling & General Contracting Inc. stands out as a premier choice for quality general contracting services in Toronto. Our team of skilled professionals combines craftsmanship with innovation to deliver stunning results tailored to each client's vision. From concept to completion, we ensure meticulous attention to detail, transparent communication, and timely project delivery. With a reputation for reliability and superior workmanship, we are trusted by clients across Toronto to transform spaces into functional and aesthetically pleasing environments. Our reputation for superior workmanship and attention to detail precedes us, making us a trusted choice for those seeking reliability and excellence in construction.
              </p>
            </div>

            <div className="md:col-span-3 flex justify-center items-center ">
              <div className="">
                <Image
                  src="/assets/images/Quality_of_Our_Company.png"
                  width={620}
                  height={510}
                  alt="Quality image"
                  className="w-dvw md:h-[550px] lg:h-[600px] xl:h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
