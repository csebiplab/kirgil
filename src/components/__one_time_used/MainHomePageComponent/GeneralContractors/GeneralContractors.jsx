
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./GeneralContractors.css"

const GeneralContractors = () => {
  return (
    <div className="bg__color">
      <div className="full__section_l_p pr-3 md:pr-8 lg:pr-0">
        <div className="grid grid-cols-1 md:grid-cols-7 common__padding__top gap-10">
          <div className="md:col-span-3 ">
                <div className="flex md:justify-normal justify-center md:items-start items-center">
                    <HeadingIcon text={headingIconText.GeneralContractors__IconTxt}/>
                </div>
                <h3 className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">The Leading General Contractors <span className="text-primary">in Toronto</span></h3>
                <p className="text-lg font-medium leading-[194%] text-center md:text-left">
                National Remodelling & General Contracting Inc. stands tall among Toronto's leading general contractors, renowned for our unwavering commitment to excellence. With a rich history spanning years, we have established ourselves as pioneers in the industry, delivering top-tier construction and renovation solutions to residential and commercial clients alike. From meticulous planning to flawless execution, every project undertaken by us reflects our dedication to quality and client satisfaction. Our team of skilled professionals combines innovative design with superior construction techniques to bring visions to life, transforming spaces into masterpieces. Whether it's a residential renovation, commercial build-out, or restoration project, our company sets the benchmark for reliability, integrity, and superior craftsmanship in Toronto's construction landscape.
                </p>
                
          </div>
          <div className="md:col-span-4 flex items-center justify-center lg:justify-end pt-6 md:pt-0">
                <div>
                    <Image src="/assets/images/GeneralContractors.png" alt="GeneralContractors" width={940} height={585}
                    // className="w-full lg:w-[550px] xl:w-[600px] 2xl:w-[700px] 3xl:w-[800px] 4xl:w-[860px] 5xl:w-[940px] h-[323px] md:h-dvh"
                    />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContractors;
