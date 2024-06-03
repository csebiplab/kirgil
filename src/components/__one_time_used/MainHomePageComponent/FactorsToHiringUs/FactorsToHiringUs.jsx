"use client";
import Factor1 from "../../../../../public/assets/images/Factor1.png";
import Factor2 from "../../../../../public/assets/images/Factor-2.png";
import Factor3 from "../../../../../public/assets/images/Factor3.png";
import Factor4 from "../../../../../public/assets/images/Factor4.png";
import Factor5 from "../../../../../public/assets/images/Factor5.png";
import Factor6 from "../../../../../public/assets/images/Factor6.png";
import Image from "next/image";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const workingData = [
  {
    imgSrc: Factor1,
    title: "Experience & Expertise",
    description: `Look for contractors with a proven track record of successful projects similar to yours. Check their portfolio, ask for references, and inquire about their experience in handling projects of your size and complexity.`,
  },
  {
    imgSrc: Factor2,
    title: "Licensing & Insurance",
    description: `Ensure the contractor is licensed to work in Toronto and carries adequate insurance, including liability insurance and workers' compensation.`,
  },
  {
    imgSrc: Factor3,
    title: "Reputation & Reviews",
    description: `Research the contractor's reputation by checking online reviews, testimonials, and ratings on platforms like Google, Yelp, or Houzz. Positive reviews and satisfied clients are indicative of reliable service. `,
  },
  {
    imgSrc: Factor4,
    title: "Communication Skills",
    description: `Effective communication is crucial for a successful project. Ensure the contractor is responsive, listens to your concerns, and provides clear and timely updates throughout the project's duration.`,
  },
  {
    imgSrc: Factor5,
    title: "Transparent Pricing",
    description: `Obtain detailed estimates from multiple contractors and ensure they include all costs, such as materials, labor, permits, and potential contingencies. Beware of unusually low bids, as they may indicate subpar.`,
  },
  {
    imgSrc: Factor6,
    title: "Timelines & Deadlines",
    description: `Discuss the project timeline with the contractor and ensure they can commit to realistic deadlines. Delays can be costly and inconvenient, so clarity on scheduling is essential from the outset.`,
  },
];

const FactorsToHiringUs = () => {
  return (
    <div className="bg-[#FFF9EE]">
      <div className="container">
        <div className="py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[90px] 3xl:py-[100px] 4xl:py-[110px] 5xl:py-[120px]">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <HeadingIcon text={headingIconText.factorsToHiringUs__IconTxt} />
            </div>

            <h2 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal text-center font-medium">
              Factors to Consider When Hiring a
              <span className="text-primary"> Toronto General Contractor</span>
            </h2>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-12">
            {workingData.map((slide, index) => (
              <div
                key={index}
                className={`text-center py-4 lg:py-6 lg:px-12 image transition-all duration-0 ease-in-out`}
              >
                <div className="">
                  <Image
                    src={slide.imgSrc}
                    width={129}
                    height={129}
                    alt="working"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center">
                    <h4 className="text-[25px] py-2 text-black">
                      {slide.title}
                    </h4>
                    <p className="text-lg text-center mt-2 mb-3  text-black leading-[24px] md:leading-6">
                      {slide.description}
                    </p>
                  </div>
                </div>
                {/* <hr className="absolute bottom-0 left-0 right-0 border border-black" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorsToHiringUs;
