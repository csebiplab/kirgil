"use client";
import Link from "next/link";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (

    <div className="">
    <div className="full__section_l_p pr-3 md:pr-0 banner__section">
      <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 pt-[20px] md:py-[75px] lg:py-[95px] xl:py-[120px] 2xl:pt-[145px] 3xl:pt-[170px] 4xl:pt-[195px] 5xl:py-[220px]">
        <div className="md:col-span-4 flex items-center">
          <div className="px-6">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[58px] 5xl:text-[65px] text-black font-bold text-left leading-tight">
              #1 Stucco Contractor <br />
              <span className="text-primary">in Toronto</span>
            </h1>
            <p className="text-lg lg:text-[25px] font-normal text-left leading-[30px] lg:leading-[40px] pt-2">
              Toronto's top stucco contractor, Kirgil Stucco Design
              specializes in exceptional stone and stucco services for all
              your needs.
            </p>
            <div className="flex justify-start py-6">
              <Link href="tel:(416) 994-4597" className="text-white cursor-pointer">
                <button
                  type="button"
                  className="flex justify-center items-center w-[190px] large__Device__Btn p-3  font-semibold "
                >
                  <span className="text-white flex justify-center items-center gap-2 mr-2 text-base font-bold">
                    Get Estimated
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
                  </span>
                </button>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="-mt-[440px] block md:hidden small__banner__section w-auto h-[586px]" />
        <div />
      </div>
    </div>
  </div>
  );
};

export default HomeBanner;
