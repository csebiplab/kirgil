"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 55,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};



const reviews = [
  {
    text: "Very satisfied!! This company helped with tile selection. Also installed laundry tub. Promptly responded. Met on time. Competed on time. Did a great job. Even on his hands and knees cleaning up the floor! Highly recommend.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "I hired this contractor to renovate my washroom, I was very satisfied with the quality of workmanship I received. My job was done in the time frame that was agreed upon. I trusted him with my budget and he delivered great work.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "Nav and his team just completed renovations in my 2 bathrooms and kitchen. Their work is fantastic - from start to finish -Nav took the time to advise and explain options to us - attention to every little detail was perfect! Could not be happier with the work - thank you for everything !",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "My old deck was small and sinking on one corner and looked awful. Thanks Nav for your guidance in making decisions on the redesign. It looks great. Love having more outdoor entertaining space. You and your guys did a great job which was completed in a day.",
    author: "Lisa Silva",
    location: "North York",
  },
  {
    text: "Very satisfied!! This company helped with tile selection. Also installed laundry tub. Promptly responded. Met on time. Competed on time. Did a great job. Even on his hands and knees cleaning up the floor! Highly recommend.",
    author: "Lisa Silva",
    location: "North York",
  }
];

const Review = () => {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="">
          <div className=" flex flex-col justify-center items-center ">
            <HeadingIcon text={headingIconText.reviews__IconTxt} />

            <div>
              <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
              Review from  <span className="text-primary">Clients</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="!px-10 md:px-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={4000}
            allowTouchMove={false}
            breakpoints={breakpoints}
          >
            {reviews.map((test, i) => (
              <SwiperSlide key={i}>
                <div className=" bg-[#fff] rounded-lg shadow-md p-[20px] ">
                  <div>
                    <Image
                      src="/assets/images/google.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <div className="lg:pt-2">
                    <Image
                      src="/assets/images/review.png"
                      width={100}
                      height={100}
                      alt="star"
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-800 py-3 3xl:text-[14px] ">
                    {test.text}
                  </p>
                  <h6 className="font-semibold text-gray-900 ">
                    {test.author}
                  </h6>
                  <p className="text-gray-600 text-xs ">{test.location}</p>
                </div>
              </SwiperSlide>
            ))}

            <div>
              <SwipButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
