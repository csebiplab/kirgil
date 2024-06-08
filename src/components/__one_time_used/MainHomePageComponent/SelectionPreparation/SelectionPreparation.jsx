"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "./SelectionPreparation.css";

import Image from "next/image";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  767: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1536: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1736: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};

const services = [
  {
    title: "Research multiple contractors",
  },
  {
    title: "Check for licenses and insurance",
  },
  {
    title: "Get multiple quotes",
  },
  {
    title: "Ask for references",
  },
  {
    title: "Have a written contract",
  },
  {
    title: "Follow the Manufacturer's Instructions",
  },
  {
    title: "Monitor Weather Conditions",
  },
  {
    title: "Allow Sufficient Curing Time",
  },
  {
    title: "Communicate with Clients",
  },
  {
    title: "Follow Safety Protocols",
  },
];
const services2 = [
  {
    title: "Don't choose solely based on price",
  },
  {
    title: "Don't hire without a contract",
  },
  {
    title: "Never ignore red flags",
  },
  {
    title: "Don't make full payment upfront",
  },
  {
    title: "Never skip the warranty",
  },
  {
    title: "Don't overlook permits",
  },
  {
    title: "Don't rush the decision",
  },
  {
    title: "Never neglect communication",
  },
  {
    title: "Don't ignore maintenance advice",
  },
  {
    title: "Don't hesitate to ask questions",
  },
];

const SelectionPreparation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="!overflow-hidden common__padding__top">
      <div className="">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center lg:justify-normal items-center">
              <HeadingIcon
                text={headingIconText.selectionPreparation__IconTxt}
              />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-[25px]">
              Kirgil's Stucco Contractor{" "}
              <span className="text-primary">Do's and Don'ts</span>
            </h3>
          </div>

          {/* taggle button */}
          {/* <div className="flex justify-center items-center mb-12 mx-2 ">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-primary">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border pr-5  lg:px-32 rounded-3xl lg:py-4 py-2  text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  !isChecked ? "text-white bg-primary " : "text-primary"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)"></g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Our Stucco Contractor Do's
              </span>
              <span
                className={`flex items-center pr-5 lg:px-32 rounded-3xl lg:py-4 py-2 text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  isChecked ? "text-white bg-primary " : "text-primary"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                Kirgil's Stucco Contractor Don'ts
              </span>
            </label>
          </div> */}
          <div className="flex justify-center items-center mb-12 mx-2">
            <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-3xl bg-white border border-primary">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                className={`flex items-center border pr-5 md:px-32 rounded-3xl lg:py-3 py-2 text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  !isChecked ? "text-white bg-primary" : "text-primary"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                >
                  <g clipPath="url(#clip0_3122_652)"></g>
                  <defs>
                    <clipPath id="clip0_3122_652">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                {/* Content for larger devices */}
                <span
                  className={`text-lg font-bold hidden md:block ${
                    !isChecked ? "text-white bg-primary" : "text-primary"
                  }`}
                >
                  Our Stucco Contractor Do's
                </span>
                {/* Content for smaller devices */}
                <span
                  className={`text-lg font-bold md:hidden ${
                    !isChecked ? "text-white bg-primary" : "text-primary"
                  }`}
                >
                  Do's
                </span>
              </span>
              <span
                className={`flex items-center pr-5 md:px-32 rounded-3xl lg:py-3 py-2 text-xs md:text-base 3xl:text-lg 5xl:text-[20px] 5xl:leading-[25px] font-bold ${
                  isChecked ? "text-white bg-primary" : "text-primary"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mr-[6px] fill-current"
                ></svg>
                {/* Content for larger devices */}
                <span
                  className={`text-lg font-bold hidden md:block ${
                    isChecked ? "text-white bg-primary" : "text-primary"
                  }`}
                >
                  Kirgil's Stucco Contractor Don'ts
                </span>
                {/* Content for smaller devices */}
                <span
                  className={`text-lg font-bold md:hidden ${
                    isChecked ? "text-white bg-primary" : "text-primary"
                  }`}
                >
                  Don'ts
                </span>
              </span>
            </label>
          </div>

          <div className="w-full h-[2px] bg-primary" />
          {/* large device  */}
          <div className="hidden md:block">
            <div className="flex justify-around ">
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
              <div className="w-[2px] h-[70px] bg-primary" />
            </div>
          </div>
          {/* small device  */}
          <div className="block md:hidden">
            <div className=" flex justify-center">
              <div className="w-[2px] h-[70px] bg-primary" />
            </div>
          </div>

          <div className="">
            {!isChecked && (
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="mx-auto w-[210px] h-[185px] cart px-4">
                      <div className="py-7">
                        <p className="mt-4 py-5 mx-auto text-white text-center text-lg font-bold">
                          {service.title}{" "}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwipButton />
              </Swiper>
            )}

            {isChecked && (
              <Swiper
                modules={[Navigation, Autoplay]}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={3000}
                allowTouchMove={false}
                className="!px-5 md:px-0 !overflow-hidden"
              >
                {services2.map((service, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="mx-auto w-[210px] h-[185px] cart px-4">
                      <div className=" py-7 ">
                        <p className="mt-4 py-5 mx-auto text-center text-white text-lg font-bold">
                          {service.title}{" "}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwipButton />
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionPreparation;
