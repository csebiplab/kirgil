import Image from "next/image";
import "../HomeBanner/HomeBanner.css";

const HomeBanner = () => {
  return (
    <div>
      {/* large device  */}

      <div className="hidden md:block">
        <div className="full__section_l_p banner__section">
          <div className="banner-content grid grid-cols-1 md:grid-cols-8 items-center gap-10 py-[40px] md:pt-[60px] lg:pt-[85px] xl:pt-[115px] 2xl:pt-[130px] 3xl:pt-[150px] 4xl:pt-[170px] 5xl:pt-[192px] md:pb-[60px] lg:pb-[80px] xl:pb-[105px] 2xl:pb-[130px] 3xl:pb-[155px] 4xl:pb-[180px] 5xl:pb-[205px]">
            <div className="md:col-span-4 flex items-center">
              <div className="">
                <h1 className="text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-center md:text-left leading-tight">
                  General Contractors <br /> in Toronto Ontario
                </h1>
                <p className="text-lg lg:text-[20px] font-medium text-center md:text-left leading-[30px] lg:leading-[40px]">
                  The general contractors in Toronto of National Remodelling &
                  General Contracting Inc. offer top-notch #1 remodeling and
                  construction services.
                </p>
                <div className="flex justify-center md:justify-start py-6">
                  <button
                    type="submit"
                    className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center"
                  >
                    <span className="mr-2 text-white">Get Estimated</span>
                  </button>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* small device  */}

      <div className="-rotate-270 bg__color_small block md:hidden">
        <div className="py-12 px-8">
          <p className="text-4xl lg:text-[40px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[52px] 4xl:text-[56px] 5xl:text-[60px] text-primary font-medium text-center md:text-left leading-normal">
            General Contractors <br /> in Toronto Ontario
          </p>
          <p className="text-lg lg:text-[20px] font-medium text-center md:text-left leading-[30px] lg:leading-[50px]">
            The general contractors in Toronto of National Remodelling & General
            Contracting Inc. offer top-notch #1 remodeling and construction
            services.
          </p>
          <div className="flex justify-center md:justify-start pt-6">
            <button
              type="submit"
              className="w-[200px] lg:w-[274px] rounded-md bg-primary px-6 lg:px-10 py-4 font-semibold flex justify-center items-center"
            >
              <span className="mr-2 text-white">Get Estimated</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/small-device-banner.png"
            alt="banner image"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
