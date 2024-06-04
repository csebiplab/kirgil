"use client";
import "./HomeBanner.css";
import { Button } from "@material-tailwind/react";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="hidden md:block ">
        <div className="full__section_l_p banner__section">
          <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[40px] md:py-[60px] lg:py-[80px] xl:py-[110px] 2xl:pt-[140px] 3xl:pt-[160px] 4xl:pt-[175px] 5xl:py-[192px]">
            <div className="md:col-span-4 flex items-center">
              <div className="">
                <h1 className="text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[65px] text-black font-bold text-center md:text-left leading-tight">
                  #1 Stucco Contractor{" "}
                  <span className="text-[#FB9401]">in Toronto</span>
                </h1>
                <p className="text-lg lg:text-[20px] font-medium text-center md:text-left leading-[30px] lg:leading-[40px] pt-2">
                  Toronto's top stucco contractor, Kirgil Stucco Design
                  specializes in exceptional stone and stucco services for all
                  your needs.
                </p>
                <div className="flex justify-center md:justify-start py-6">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-[190px] large__Device__Btn p-3  font-semibold "
                  >
                    <span className="flex justify-center items-center gap-2 mr-2 text-white text-lg font-medium">
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
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small__banner__section w-auto h-[627px]">
          <div className="small__banner__section__content">
            <h1 className="pt-[30px] pl-[30px] text-4xl text-black font-bold">
              #1 Stucco Contractor 
              <span className="text-[#FB9401]"> in Toronto</span>
            </h1>
            <p className="px-[40px] pt-[10px] text-lg text-black font-medium">
              Toronto's top stucco contractor, Kirgil Stucco Design specializes
              in exceptional stone and stucco services for all your needs.
            </p>
            <div className="w-full flex items-center justify-center md:justify-start pl-[30px] pt-[25px]">
              <Button className="small__device__btn gap-x-2">
                <span className="flex justify-center items-center gap-2 text-white text-xs font-bold">
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
