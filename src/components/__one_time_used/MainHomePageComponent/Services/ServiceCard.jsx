import CommonButton from "@/components/ui/CommonButton";
import Image from "next/image";

const ServiceCard = ({ serv }) => {
  const { imgUrl, title, desc } = serv ?? {};

  return (
    <div className="py-[12.5px] md:py-0">
      <div className=" service__card">
      <div className="text-center">
        <Image
          src={imgUrl}
          width={430}
          height={280}
          alt="easy pools"
          className="W-full h-[240px]"
        />
        <div>
          <div className="px-[15px]">
          <h5 className="py-3 text-left md:py-[15px] 2xl:text-[24px] lg:text-xl text-sm leading-normal">
            {title}
          </h5>
          <p className="text-lg text-left font-normal leading-normal pb-[24px]">{desc}</p>
          </div>
          {/* <div className="absolute bottom-0 left-0 right-0 pb-[20px] mt-20 flex justify-center items-end ">
            <CommonButton/>
          </div> */}
          <button className="w-full bg-primary px-[34px] py-[10px] flex justify-center items-center rounded-b-md ">
                <span className="text-white text-lg font-medium">Learn More</span>
              </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceCard;
