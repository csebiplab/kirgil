import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { PiMapPinLineFill } from "react-icons/pi";
import Image from "next/image";

import "./GiveUsFeedback.css";

export default function ContactHome() {
  return (
    <div className="">
      <div className="container common__padding__top">
        <div className="grid grid-cols-1 lg:grid-cols-6 items-center">
          <div className="contact__us order-2 lg:order-1 py-[30px] lg:py-[50px] xl:py-[80px] 3xl:py-[100px] 5xl:py-[130px] md:pl-[60px] lg:pr-2 lg:col-span-3 text-white">
            <div className="">
              <h4 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black text-center md:text-start">
                Contact Us
              </h4>
              <div className="">
                <a
                  href="address:1003 Caledonia Road Toronto, ON M6B 3Y9"
                  className="my-3 flex gap-2 items-center lg:text-lg text-sm justify-center lg:justify-start pb-6"
                >
                  <PiMapPinLineFill className="fill-black w-[29px] h-[29px]" />
                  <span className="text-black text-lg font-normal">
                    1003 Caledonia Road <br className="block md:hidden"/> Toronto, ON M6B 3Y9
                  </span>
                </a>
              </div>
              <div className="">
                <a
                  href="tel:(416) 994-4597"
                  className="my-3 flex gap-2 items-center lg:text-lg text-sm justify-center lg:justify-start pb-6"
                >
                  <FaPhoneVolume className="fill-black w-[29px] h-[29px]" />
                  <span className="text-black text-lg font-normal">
                  (416) 994-4597
                  </span>
                </a>
              </div>
              <div className="">
                <a
                  href="mailto:Info@kirgil.ca"
                  className="lg:text-lg text-sm flex gap-2 items-center justify-center lg:justify-start pb-6"
                >
                  <IoIosMail className="fill-black w-[29px] h-[29px]" />
                  <span className="text-black text-lg font-normal">
                    Info@kirgil.ca
                  </span>
                </a>
              </div>
              <div className="flex lg:gap-8 gap-3 justify-center lg:justify-start mb-4">
                <FaFacebook className="fill-black w-[29px] h-[29px]" />
                <FaXTwitter className="fill-black w-[29px] h-[29px]" />
                <FaInstagram className="fill-black w-[29px] h-[29px]" />
                <FaLinkedin className="fill-black w-[29px] h-[29px]" />
              </div>

              <div className="flex justify-center lg:justify-start">
                <div>
                  <h6 className="text-black text-[25px] text-center md:text-left font-bold">
                    Best Construction Company Toronto
                  </h6>
                  <div className="py-8">
                    <Image
                      src="/assets/logo/contact__Us__logo.png"
                      height={260}
                      width={130}
                      alt="contact us Logo"
                      className="w-[260px] h-[130px] mx-auto lg:mx-0"
                    />
                  </div>
                  <h6 className="text-black text-[25px] font-bold text-center md:text-left">
                    KIRGIL CONSTRACTION INC
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-lg py-[30px] lg:py-[45px]  xl:py-[60px]  3xl:py-[75px] 5xl:py-[85px] px-6  lg:pl-[60px] lg:col-span-3 items-center">
            <h4 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-black md:text-start text-center">
              Give Us Feedback{" "}
            </h4>
            <form action="#" className="space-y-4 ">
              <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 mb-4">
                  <div>
                    {" "}
                    <p className="mb-2 text-black text-lg font-normal">
                      Your name *
                    </p>
                    <label className="sr-only" htmlFor="name">
                      name
                    </label>
                    <input
                      className="w-full field__style shadow-sm p-3 text-sm font-normal text-black"
                      placeholder="Robot Fox
                      "
                      type="text"
                      id="name"
                    />
                  </div>

                  <div>
                    <p className="mb-2 text-black text-lg font-normal">
                      Email *
                    </p>
                    <label className="sr-only" htmlFor="email">
                      email
                    </label>
                    <input
                      className="w-full field__style shadow-sm p-3 text-sm font-normal text-black"
                      placeholder="Info@kirgil.ca
                      "
                      type="email"
                      id="email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-8 mb-4">
                <div>
                  <p className="mb-2 text-black text-lg font-normal">
                    Subjects *
                  </p>
                  <label className="sr-only" htmlFor="subjects">
                    subjects
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm font-normal text-black"
                    placeholder="Subjects"
                    type="text"
                    id="subjects"
                  />
                </div>

                <div>
                  <p className="mb-2 text-black text-lg font-normal">
                    Your Phone *
                  </p>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm font-normal text-black"
                    placeholder="(416) 994-4597"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <p className="mb-2 text-black text-lg font-normal">Message *</p>
                <textarea
                  className="w-full field__style shadow-sm p-4 text-sm font-normal text-black"
                  placeholder="Write Message"
                  rows="6"
                  id="message"
                ></textarea>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center mt-0 lg:mt-10"
                >
                  <span className="mr-2 text-base font-bold text-white">
                    Submit
                  </span>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                    >
                      <path
                        d="M1.614 2.35667L7.66652 4.86111L1.614 4.08333V2.35667ZM7.66652 9.13889L1.614 11.6433V9.91667L7.66652 9.13889ZM0 0V5.44444L12.105 7L0 8.55556V14L16.947 7L0 0Z"
                        fill="white"
                      />
                    </svg>
                  </>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
