
"use client";

import work1 from "../../../../../public/assets/images/working1.png";
import work2 from "../../../../../public/assets/images/working2.png";
import work3 from "../../../../../public/assets/images/working3.png";
import work4 from "../../../../../public/assets/images/working4.png";
import work5 from "../../../../../public/assets/images/working5.png";
import work6 from "../../../../../public/assets/images/working6.png";
import work7 from "../../../../../public/assets/images/working7.png";
import Image from "next/image";

import "./WorkingProcess.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import { SwipButton } from "../BenefitsWithEasyPools/SwipButton";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const slideData = [
  {
    imgSrc: work1,
    title: "Clear Communication",
    description: `Establish clear channels of communication to ensure all parties are on the same page. Utilize communication platforms such as Slack or Microsoft Teams for quick updates and discussions.`,
  },
  {
    imgSrc: work2,
    title: "Project Planning",
    description: `Break down projects into smaller tasks and create a detailed project plan outlining objectives, timelines, and resources required. Use project management tools like Asana or Trello to track.`,
  },
  {
    imgSrc: work3,
    title: "Standardized Procedures",
    description: `Develop standardized procedures for common tasks to ensure consistency and quality across projects. Document these procedures in a centralized location accessible to all contractors.`,
  },
  {
    imgSrc: work4,
    title: "Utilize Technology",
    description: `Leverage technology to automate repetitive tasks and streamline processes. For example, use scheduling software to coordinate meetings and appointments, and accounting software to manage finances and invoices.`,
  },
  {
    imgSrc: work5,
    title: "Training & Development",
    description: `Invest in training and development programs to equip contractors with the skills and knowledge needed to perform their tasks effectively. Provide access to online courses, workshops, and resources relevant.`,
  },
  {
    imgSrc: work6,
    title: "Feedback Mechanism",
    description: `Establish a feedback mechanism to gather input from contractors on the working process and identify areas for improvement. Regularly review feedback and make necessary adjustments to enhance efficiency.`,
  },
  {
    imgSrc: work7,
    title: "Continuous Improvement",
    description: `Foster a culture of continuous improvement where contractors are encouraged to suggest innovative ideas and solutions for optimizing the working process. Regularly assess and refine procedures to adapt.`,
  }
  
];

const OurWorkingProcessSection = () => {
  return (
    <div className="container common__padding__top">
      <div className="">
        <div className="text-center pb-4">
          <div className="flex justify-center gap-[54px]">
            <HeadingIcon text={headingIconText.workingProcess__IconTxt}/>
          </div>
          <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-primary text-center">
          Streamlined Working Process <span className="text-black">of Our Contractors</span>
          </h3>
          <p className="text-lg font-normal text-center py-[10px]">
          Streamlining the working process of our contractors is crucial for enhancing efficiency and productivity. By implementing systematic procedures and utilizing technology effectively, we can optimize every stage of the workflow.
          </p>
        </div>

        {/* ==================== swiper slider ================ */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="w-full !h-full  card-sd bg-primary py-6">
                <Image
                  src={slideInfo?.imgSrc}
                  width={72}
                  height={72}
                  alt="sliderImage"
                  className="w-[100px] h-[100px] p-3 rounded-full border-2 bg-white mx-auto"
                />
                <div className="text-center py-3 md:px-2 px-1">
                  <h4 className="text-[25px] font-bold py-1 md:py-2 text-center text-balck">
                    {slideInfo?.title}
                  </h4>
                  <p className="text-lg font-normal md:px-1 text-center text-black">
                    {slideInfo?.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwipButton/>
        </Swiper>
      </div>
    </div>
  );
};

export default OurWorkingProcessSection;
