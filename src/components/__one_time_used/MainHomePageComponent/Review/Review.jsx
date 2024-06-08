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
    spaceBetween: 50,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};



const reviews = [
  {
    text: "I would recommend Kirgil Stucco Design Inc and his team without hesitation. I'm pleased with how the stucco work turned out on my 3 dormers. The Serhat was helpful, organized and professional. Great people to work with!",
    author: "Steve Jarman",
    location: "Toronto",
  },
  {
    text: "Kirgil Stucco Design Inc was professional, efficient and knowledgeable about their products. Staff was very helpful in assisting us choosing a colour and style that would help our vision come to life.",
    author: "Jason Bauman",
    location: "Toronto",
  },
  {
    text: "Serhat and his did a fabulous job of installing stucco boxes around our upper floor windows, replacing the very old aluminium sidings. Serhat was friendly, professional, and went the extra mile to make sure that we were happy with the results. We highly recommend Kirgil Stucco Design Inc for work!",
    author: "Kelley Stamm",
    location: "Toronto",
  },
  {
    text: "They are great. Friendly, show up on time, no delays in their work, they work quick, the quality of work is top notch, you can tell they are professionals that have been doing this a long time.",
    author: "dawn duprey",
    location: "Toronto",
  },
  {
    text: "Reliable, affordable price at high quality work for my home repair, he explained why is there cracks on the foundation walls and how to avoid the water in the basement for future problems , it was great service, thanks Serhat!",
    author: "Vicki Burns",
    location: "Toronto",
  },
  {
    text: "He absolutely knows what he does, reliable and good quality stucco work , his team was very nice to other neighbours and he did nice and clean job for me , would highly recommend it .",
    author: "I. Harding",
    location: "Toronto",
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
              <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center pb-6">
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
              <SwiperSlide key={i} className="!h-auto !md:h-full">
                <div className="!h-full bg-[#fff] rounded-lg shadow-md p-[16px] md:p-[12px]">
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
                  <p className="text-lg font-normal text-black py-3 3xl:text-[14px] ">
                    {test.text}
                  </p>
                  <h6 className="text-base font-bold text-black ">
                    {test.author}
                  </h6>
                  <p className="text-xs text-[#4A4A4A] font-normal">{test.location}</p>
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
