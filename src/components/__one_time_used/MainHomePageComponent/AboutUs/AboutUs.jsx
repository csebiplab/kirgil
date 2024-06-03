import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#FFF9EE]">
        <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-[50px] py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] 3xl:py-[100px] 4xl:py-[110px] 5xl:py-[120px]">
        <div className="order-2 md:order-1">
          <div className="">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.AboutUs__IconTxt}
              />
            </div>
            <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
              <span className="text-primary">About Our </span>
              General Contractors in Toronto
            </h3>
            <p className="text-lg font-medium leading-[194%] text-center md:text-left">
            National Remodelling & General Contracting Inc. is one of the best remodeling & contracting companies in Toronto. We’ve been in business for the past 15 years serving the GTA and surrounding areas in both residential and commercial capacity. Our company is fully licensed and insured, with licensed plumbers, electricians, HVAC and gas, and mechanical guys on board our team. We can do legal basements, kitchen renovations, washrooms, stairs, hardwood floors, tiling, painting, fences and decks, carpentry, and many more designs to your dreams. We have a Whmis license, height, and fall, asbestos, and I’m fully insured. Please give us a call today at 416-996-2409. We look forward to hearing from you!
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-7 gap-x-4">
            <div className="col-span-4">
              <div>
                <div className="mb-6 w-full h-[197px] flex justify-center">
                  <Image
                    src="/assets/images/About_Us_1.png"
                    alt="About us"
                    width={350}
                    height={262}
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/About_Us_3.png"
                    alt="About us"
                    width={350}
                    height={333}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <Image
                src="/assets/images/About_Us_2.png"
                alt="About us"
                width={295}
                height={515}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;