import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./BestStuccoPainting.css";

const BestStuccoPainting = () => {
  return (
    <div>
      <div className=" container common__padding__top">
        <div className=" grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px]">
          <div className=" md:col-span-3 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Best__Stucco__Painting.png"
                width={680}
                height={495}
                alt="Best__Stucco__Painting image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 ">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.bestStuccoPainting__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-black md:text-start text-center">
            Best Stucco Painting <br /> <span className="text-[#FB9401]"> Toronto</span>

            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Kirgil Stucco Design is the best stucco paint services company in Toronto. For the finest stucco painting services in Toronto, look no further than our stucco painting services company. With a reputation built on excellence and precision, Kirgil is renowned for transforming homes and businesses with stunning stucco finishes. Our team of skilled professionals is dedicated to delivering superior craftsmanship, ensuring every project is completed to perfection. From meticulous surface preparation to expert color matching and application, our company takes pride in exceeding customer expectations. Whether you're refreshing the exterior of your home or enhancing the look of your commercial property, our commitment to quality and attention to detail shine through in every brushstroke. Trust us for unparalleled stucco painting services that enhance the beauty and value of your property in Toronto.
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestStuccoPainting;