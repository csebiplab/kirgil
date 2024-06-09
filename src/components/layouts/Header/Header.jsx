"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import UpperNavbar from "./UpperNavbar";
import "./Header.css";
import Link from "next/link";
import { UtilsModule } from "@/utils/nav-menus";
import logo from "../../../../public/assets/logo/navbar__logo.png";
import TopNavbar from "./TopNavbar";
import { Button } from "@material-tailwind/react";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50">
      <nav className="py-0 lg:py-1 main__header">
        <div className={`${isVisible ? "" : "hidden"}`}>
          <TopNavbar />
        </div>
        <div className=" pl-6 md:pl-8 lg:pl-24 xl:pl-28 2xl:pl-32 3xl:pl-40 4xl:pl-52 5xl:pl-[285px] flex items-center gap-x-4 xl:gap-x-8 2xl:gap-x-12 3xl:gap-x-16 4xl:gap-x-20 5xl:gap-x-[90px]">
          <Link href="/">
            <Image
              src={logo}
              width={241}
              height={96}
              alt="logo"
              className="hidden lg:block w-[115px] lg:w-[135px] xl:w-[145px] 2xl:w-[155px] 3xl:w-[180px] 4xl:w-[210px] 5xl:w-[241px] h-[57px] 2xl:h-[60px] 3xl:h-[70px] 4xl:h-[80px] 5xl:h-[96px]"
            />
          </Link>

          <div className="hidden lg:block my-1 pr-6 md:pr-8 lg:pr-24 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-52 5xl:pr-[285px] w-full">
            <div className="w-full">
              <UpperNavbar />
            </div>

            <div className="hidden lg:block">
              <div className="w-full h-[1px] bg-white lg:bg-black my-1 " />
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full hidden lg:block">
                <ul className="flex items-center gap-5 pb-2 xl:gap-6 2xl:gap-8 3xl:gap-10 4xl:gap-11 5xl:gap-[50px]">
                  {UtilsModule.navMenus.map(
                    ({ mainMenu, url, subMenu, svg = null }, index) => (
                      <li key={index}>
                        <Link
                          href={url}
                          className={`${
                            svg ? "flex items-center gap-x-1" : ""
                          } text-[14px] 4xl:text-[16px] 5xl:text-lg text-black font-normal`}
                        >
                          {mainMenu} {svg}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* <div className="w-full sm:w-full lg:w-[250px] flex items-center justify-end  gap-x-6 md:gap-x-7 lg:gap-x-8">
                <button href="(416) 994-4597"
                  type="submit"
                  className="flex justify-center items-center Large__Device__Btn py-2 px-3  font-bold "
                >
                  <span className="flex justify-center items-center gap-2 mr-2 text-white text-sm xl:text-base font-bold">
                    Get Estimated
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                    >
                      <path
                        d="M1.38997 0L0 1.23883L4.22005 5L0 8.76117L1.38997 10L7 5L1.38997 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div> */}

              <div className="w-[200px] h-auto">
                <div className="flex items-center justify-center gap-2 bg__color__nav__btn py-1 px-3">
                  <a
                    href="tel:(416) 994-4597"
                    className="text-white font-bold text-base"
                  >
                    Get Estimated
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="13"
                    viewBox="0 0 9 13"
                    fill="none"
                  >
                    <path
                      d="M1.78711 0L0 1.61048L5.42578 6.5L0 11.3895L1.78711 13L9 6.5L1.78711 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* small device  */}
      <div className="block lg:hidden">
        <div
          className={`Top__Navbar__bg flex justify-center items-center gap-x-1 py-2 ${
            isVisible ? "" : "hidden"
          }`}
        >
          {/* <Image
            src="/assets/socials/man.png"
            width={23}
            height={23}
            alt="email icon"
            className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
          /> */}
          <FaCanadianMapleLeaf />
          <h5 className="text-[14px] text-black font-bold">
            Stucco Contractor in Toronto
          </h5>
        </div>
      </div>
      <div className="w-full bg-white flex justify-between items-center px-[20px] sm:px-[30px] py-2 sm:py-2 lg:py-0">
        <div className="block lg:hidden">
          <Button className="small__nav__btn flex items-center gap-x-2">
            <span className="text-xs sm:text-base font-bold">
              <Link href="tel:(416) 994-4597" className="text-white">
                Get Estimated
              </Link>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
            >
              <path
                d="M2.07589 0.739258L0.298388 2.40395L5.695 7.45807L0.298388 12.5122L2.07589 14.1769L9.25 7.45807L2.07589 0.739258Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>

        <div className="block lg:hidden">
          <Button className="small__nav__btn text-white phone__icon flex items-center gap-x-2">
            <Image
              src="/assets/icons/phone__icon.png"
              alt="phone icon"
              width={20}
              height={20}
            />
            <span className="text-white text-[10px] sm:text-base font-bold">
              <Link href="tel:(416) 994-4597" className="text-white">
                Click to Call
              </Link>
            </span>
          </Button>
        </div>

        <div className="block lg:hidden">
          <Image
            src="/assets/icons/menu__icon.png"
            width={22}
            height={22}
            alt="Menu"
            className="w-[22px] h-[22px]"
          />
        </div>
      </div>

      <div className="block lg:hidden">
        <div
          className={`w-full flex justify-center items-center pb-3 bg-white ${
            isVisible ? "" : "hidden"
          }`}
        >
          <Image
            src="/assets/logo/brand.png"
            width={135}
            height={67}
            alt="brand"
            className="w-[135px] h-[67px]"
          />
        </div>
      </div>

      {/* small device end  */}
    </header>
  );
};

export default Header;
