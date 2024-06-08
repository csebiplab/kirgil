"use client";

import { headingIconText } from "@/utils/heading-text";
import React from "react";
import "./ChoosesUs.css";

import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";

const usualPool = [
  {
    title: "Poor communication",
  },
  {
    title: "Lack of attention to detail",
  },
  {
    title: "Budget overruns",
  },
  {
    title: "Missed deadlines",
  },
  {
    title: "Low-quality workmanship",
  },
  {
    title: "Unreliable subcontractors",
  },
  {
    title: "Poor project management",
  },
  {
    title: "Lack of accountability",
  },
];
const easyPool = [
  {
    title: "High communication",
  },
  {
    title: "Skilled workforce",
  },
  {
    title: "Project management",
  },
  {
    title: "Comprehensive service",
  },
  {
    title: "Quality assurance",
  },
  {
    title: "Regulatory compliance",
  },
  {
    title: "Flexibility and adaptability",
  },
  {
    title: "Customer satisfaction",
  },
];

const ChoosesUs = () => {
  return (
    <div className="">
      <div className="container">
        <div className="2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[50px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-start justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
                <HeadingIcon
                  text={headingIconText.chooseUs__IconTxt}
                  classes={{ textBlack: "text-black" }}
                />
              </div>

              <div>
                <h3 className="text-black  text-[28px] lg:text-4xl font-medium text-center md:text-left">
                Why <br />
                  <span className="text-primary">Chooses Us</span>
                </h3>
              </div>

              <div>
                <p className=" md:block text-lg font-normal text-center md:text-left text-black pt-4">
                In conclusion, based on our stellar reputation, unparalleled expertise, and unwavering dedication to customer satisfaction, Kirgil Stucco Design is undoubtedly the best choice for all your stucco needs
                </p>
              </div>
            </div>

            <div className="border-2 pt-6 md:py-0 bg__color1">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
                Usual General Contractors
              </h2>
              <div className=" grid grid-flow-col grid-rows-8 py-sm md:py-base lg:py-[19px] xl:py-lg 2xl:py-[19px] 3xl:py-[20px] 4xl:py-[21px] 5xl:py-[22px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-center mb-[25px] leading-none  "
                  >
                    <Image
                      src="/assets/images/x.png"
                      alt="x"
                      width={27}
                      height={27}
                      className="h-[27px] w-[27px]"
                    />
                    <p className="text-lg text-[#000] font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" border-2 pt-6 md:py-0 bg__color2">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
                Our General Contractors
              </h2>
              <div className="grid grid-flow-col grid-rows-8 py-sm md:py-base lg:py-[19px] xl:py-lg 2xl:py-[19px] 3xl:py-[20px] 4xl:py-[21px] 5xl:py-[22px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/images/r.png"
                      alt="r"
                      width={27}
                      height={27}
                      className="h-[27px] w-[27px]"
                    />
                    <p className="text-[16px] text-[#000] font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosesUs;
