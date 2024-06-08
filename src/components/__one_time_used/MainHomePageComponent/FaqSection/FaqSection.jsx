"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
const faqQuestionsNAns = [
  {
    id: 1,
    question: "Can stucco be repaired?",
    answer:
      "Yes, stucco can be repaired if it becomes damaged or develops cracks over time. Our contractors are skilled in assessing and repairing stucco issues to ensure the integrity and appearance of your home's exterior.",
  },
  {
    id: 2,
    question: "Is stucco suitable for all climates?",
    answer:
      "Yes, we understand that every space has unique cleaning needs. We offer customizable cleaning plans tailored to meet the specific requirements of our clients.",
  },
  {
    id: 3,
    question: "Do you offer color options for stucco?",
    answer:
      "Yes, we bring our professional-grade equipment and supplies to ensure thorough and efficient cleaning. However, if you have specific preferences or products you'd like us to use, we're happy to accommodate.",
  },
  {
    id: 4,
    question: "Can stucco be applied over existing siding?",
    answer:
      "You can schedule cleaning services as frequently as needed. Whether you require daily, weekly, bi-weekly, or monthly cleaning, we can create a schedule that fits your needs and budget.",
  },
  {
    id: 5,
    question: "Do you offer financing options for stucco projects?",
    answer:
      "We prioritize the security and confidentiality of our client's properties and information. Our cleaners undergo thorough background checks, and we have strict protocols in place to safeguard your privacy.",
  },
  {
    id: 6,
    question: "Are your stucco contractors licensed and insured?",
    answer:
      "You can request a quote by contacting us directly through phone, email, or our website. We'll assess your cleaning needs and provide you with a customized quote tailored to your requirements.",
  },
];
const FaqSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-[28px] lg:gap-[30px] xl:gap-[32px] 2xl:gap-[34px] 3xl:gap-[36px] 4xl:gap-[38px] 5xl:gap-[40px]">
        <div className="md:col-span-3">
          <div className="flex flex-col justify-center items-start">
            <div>
              <HeadingIcon text={headingIconText.faq__IconTxt} />
            </div>

            <div>
              <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-start pb-[25px]">
                FAQs for Our <br />{" "}
                <span className="text-primary">
                  Stucco Contractor Services in Toronto
                </span>
              </h3>
            </div>
          </div>
          <>
            {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
              <Accordion
                key={id}
                open={open === id}
                className="mb-1 text-white bg-primary"
              >
                <AccordionHeader
                  onClick={() => handleOpen(id)}
                  className=" relative"
                >
                  <div
                    className={`text-white  border-b-0 transition-colors py-sm px-5`}
                  >
                    <span className="text-white text-lg font-bold">
                      {question}
                    </span>
                  </div>
                  <div className="absolute right-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                    >
                      <path
                        d="M7.85438 8.80353L0.908939 1.3452C0.432523 0.833597 0.795322 -9.06148e-07 1.4944 -8.7698e-07L14.5803 -3.30987e-07C15.2793 -3.01819e-07 15.6421 0.833599 15.1657 1.3452L8.22029 8.80353C8.12142 8.9097 7.95324 8.9097 7.85438 8.80353Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </AccordionHeader>
                <AccordionBody className="px-3 py-1 text-lg font-normal bg-white text-black">
                  {answer}
                </AccordionBody>
              </Accordion>
            ))}
          </>
        </div>
        <div className="md:col-span-3">
          <Image
            src="/assets/images/FAQ.png"
            alt="faq"
            width={764}
            height={558}
            className="w-[764px] h-[558px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
