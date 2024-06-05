import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume, FaXTwitter } from "react-icons/fa6";
import { PiMapPinLineFill } from "react-icons/pi";
import Image from "next/image";

import "./GiveUsFeedback.css";

export default function ContactHome() {
  return (
    <div className="bg__color">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-6 items-center common__padding__top">
          <div className="contact__us order-2 lg:order-1 py-[30px] lg:py-[50px] xl:py-[80px] 3xl:py-[100px] 5xl:py-[130px] px-6 pl-[30px] md:pl-[60] lg:pl-[90px]  xl:pl-[120px]  2xl:pl-[160px] 3xl:pl-[200px]  4xl:pl-[240px] 5xl:pl-[285px] lg:pr-2 lg:col-span-3 text-white">
            
            <div className="">
              <h2 className="text-[28px] md:text-4xl font-bold leading-normal text-black pb-[20px] text-center lg:text-left">
                Contact Us
              </h2>
              <div className="">
                <a
                  href="address:1003 Caledonia Road Toronto, ON M6B 3Y9"
                  className="my-3 flex gap-2 items-center lg:text-lg text-sm justify-center lg:justify-start pb-6"
                >
                  <PiMapPinLineFill className="fill-black w-[29px] h-[29px]" />
                  <span className="text-black text-lg font-normal">
                  1003 Caledonia Road Toronto, ON M6B 3Y9
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
                  href="mailto: serhatkirgil@gmail.com"
                  className="lg:text-lg text-sm flex gap-2 items-center justify-center lg:justify-start pb-6"
                >
                  <IoIosMail className="fill-black w-[29px] h-[29px]" />
                  <span className="text-black text-lg font-normal">
                  serhatkirgil@gmail.com
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
                  <h4 className="text-black text-[25px] text-center md:text-left font-bold">
                  Best Construction Company Toronto
                  </h4>
                  <div className="py-8">
                    <Image
                      src="/assets/logo/contact__Us__logo.png"
                      height={260}
                      width={130}
                      alt="contact us Logo"
                      className="w-[260px] h-[130px] mx-auto lg:mx-0"
                    />
                  </div>
                  <h4 className="text-black text-[25px] font-bold text-center md:text-left">
                  KIRGIL CONSTRACTION INC
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-lg py-[30px] lg:py-[45px]  xl:py-[60px]  3xl:py-[75px] 5xl:py-[85px] px-6 pr-[30px] md:pr-[60] lg:pr-[90px]  xl:pr-[120px]  2xl:pr-[160px] 3xl:pr-[200px]  4xl:pr-[240px] 5xl:pr-[285px] lg:pl-[60px] lg:col-span-3 items-center">
            <h2 className="lg:mb-8 mb-5 text-white text-[28px] lg:text-4xl font-bold">
              Give Us Feedback{" "}
            </h2>
            <form action="#" className="space-y-4 ">
              <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:mb-8 mb-4">
                  <div>
                    {" "}
                    <h5 className="mb-2 text-white text-[14px] md:text-lg font-normal">
                      Your name *
                    </h5>
                    <label className="sr-only" htmlFor="email">
                      name
                    </label>
                    <input
                      className="w-full field__style shadow-sm p-3 text-sm text-white"
                      placeholder="Nav Sukhraj
                      "
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <h5 className="mb-2 text-white text-[14px] md:text-lg font-normal">
                      Email *
                    </h5>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full field__style shadow-sm p-3 text-sm text-white"
                      placeholder="infonational@yahoo.com
                      "
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mb-8 mb-4">
                <div>
                  <h5 className="mb-2 text-white text-[14px] md:text-lg font-normal">
                    Subjects *
                  </h5>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm text-white"
                    placeholder="Subjects "
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <h5 className="mb-2 text-white text-[14px] md:text-lg font-normal">
                    Your Phone *
                  </h5>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full field__style shadow-sm p-3 text-sm text-white"
                    placeholder="416-996-2409"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <h5 className="mb-2 text-white text-[14px] md:text-lg font-normal">
                  Message *
                </h5>
                <textarea
                  className="w-full field__style shadow-sm p-4 text-sm text-white"
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
                  <span className="mr-2 text-white">Submit</span>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M2.09344 2.35667L8.14595 4.86111L2.09344 4.08333V2.35667ZM8.14595 9.13889L2.09344 11.6433V9.91667L8.14595 9.13889ZM0.479431 0V5.44444L12.5845 7L0.479431 8.55556V14L17.4265 7L0.479431 0Z"
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
