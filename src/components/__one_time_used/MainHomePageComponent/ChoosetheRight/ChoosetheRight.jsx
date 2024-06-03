"use client";

import { headingIconText } from "@/utils/heading-text";
import React from "react";
import "./ChoosetheRight.css";

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

const ChoosetheRight = () => {
  return (
    <div className="">
      <div className="container banner bg-dark-200">
        <div className="banner-content 2xl:py-20 py-10 shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[50px] md:gap-[30px] ">
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
                <HeadingIcon
                  text={headingIconText.chooseTheRight__IconTxt}
                  classes={{ textWhite: "text-white" }}
                />
              </div>

              <div>
                <p className="text-white  text-[28px] lg:text-4xl font-medium text-center md:text-left">
                  Choose the Right General Contractors{" "}
                  <span className="text-primary">in Toronto</span>
                </p>
              </div>

              <div>
                <p className=" md:block text-lg font-normal text-center md:text-left text-white pt-4">
                  Choosing the right general contractor in Toronto, or anywhere,
                  is crucial for the success of your construction project. Every
                  renovation company is not the same or not good at work. You
                  have to choose the right one
                </p>
              </div>
            </div>

            <div className=" border-2 my-6 md:my-0 shadow bg-[#FFF9EE] rounded-lg">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
                Usual General Contractors
              </h2>
              <div className=" grid grid-flow-col grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {usualPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/images/x.png"
                      alt="x"
                      width={23}
                      height={23}
                      className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                    />
                    <p className=" text-sm md:text-lg text-[#6B6B6B] font-bold">
                      {usual.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" border-2 my-6 md:my-0 shadow bg-[#FFF9EE] rounded-lg">
              <h2 className="title-bg text-center 2xl:py-[15px] py-[10px] text-white text-base md:text-[22px] font-bold">
                Our General Contractors
              </h2>
              <div className=" grid grid-flow-col grid-rows-8 3xl:py-[35px] py-[25px] 3xl:px-[25px] px-[20px] 2xl:text-[16px] lg:text-[14px] xs:text-[9px]  ">
                {easyPool.map((usual, idx) => (
                  <div
                    key={idx}
                    className="flex  gap-4 items-center mb-[25px]  leading-none  "
                  >
                    <Image
                      src="/assets/images/r.png"
                      alt="r"
                      width={23}
                      height={23}
                      className="2xl:h-[23px] 2xl:w-[23px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm md:text-lg text-[#6B6B6B] font-bold">
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

export default ChoosetheRight;
