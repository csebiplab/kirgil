"use client";
import working1 from "../../../../../public/assets/images/working1.png";
import working2 from "../../../../../public/assets/images/working2.png";
import working3 from "../../../../../public/assets/images/working3.png";
import working4 from "../../../../../public/assets/images/working4.png";
import working5 from "../../../../../public/assets/images/working5.png";
import working6 from "../../../../../public/assets/images/working6.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/virtual";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./WorkingProcess.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

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

const workingData = [
  {
    imgSrc: working1,
    title: "Initial Consultation",
    description: `We start by understanding the client's requirements, budget, and timeline during an initial consultation. This helps us grasp the project scope and objectives effectively.`,
  },
  {
    imgSrc: working2,
    title: "Project Planning",
    description: `After the consultation, our team conducts a thorough site assessment to evaluate the feasibility of the project. We collaborate with architects, engineers, and designers.`,
  },
  {
    imgSrc: working3,
    title: "Detailed Proposal",
    description: `Once the project plan is finalized, we provide the client with a detailed proposal outlining the scope of work, timeline, materials, and cost estimates. `,
  },
  {
    imgSrc: working4,
    title: "Permit Acquisition",
    description: `We handle all the necessary permits and approvals required for the project, ensuring compliance with local building codes and regulations.`,
  },
  {
    imgSrc: working5,
    title: "Execution",
    description: `With the plan in place and permits acquired, our experienced team of contractors begins the construction process. We prioritize efficiency, quality and safety throughout every stage of the project.`,
  },
  {
    imgSrc: working6,
    title: "Regular Updates",
    description: `We maintain open communication with the client, providing regular updates on the progress of the project and addressing any concerns or modifications promptly.`,
  },
];

const WorkingProcess = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="common__padding__top">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <HeadingIcon text={headingIconText.workingProcess__IconTxt} />
            </div>

            <h2 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal text-center font-medium">
              <span className="text-primary">Working Process</span> of Our
              Toronto General Contractors
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
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
          >
            {workingData.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`!relative text-center py-4 lg:pt-10 px-20 md:px-14 lg:px-6`}
              >
                <div className="">
                  <Image
                    src={slide.imgSrc}
                    width={192}
                    height={192}
                    alt="working"
                    className="working p-10 mt-[10px] mx-auto"
                  />
                  
                  <div className="text-center">
                    <h4 className="text-[25px] font-medium py-2">{slide.title}</h4>
                    <p className="text-lg pt-2 font-normal text-black leading-[20px] md:leading-6">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute md:top-28 lg:top-36 -left-[45px] right-[420px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="23"
                    viewBox="0 0 84 23"
                    fill="none"
                  >
                    <ellipse
                      cx="11.5846"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="#C99B4C"
                    />
                    <ellipse
                      cx="42.6306"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="black"
                    />
                    <ellipse
                      cx="72.6751"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="#C99B4C"
                    />
                  </svg>
                </div>
                <div className="block md:hidden flex justify-center pt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="84"
                    height="23"
                    viewBox="0 0 84 23"
                    fill="none"
                  >
                    <ellipse
                      cx="11.5846"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="#C99B4C"
                    />
                    <ellipse
                      cx="42.6306"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="black"
                    />
                    <ellipse
                      cx="72.6751"
                      cy="11.7705"
                      rx="11.0163"
                      ry="11"
                      fill="#C99B4C"
                    />
                  </svg>
                </div>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
