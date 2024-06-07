import Image from "next/image";


const UpperNavbar = () => {
  return (
    <nav className=" hidden lg:block ">
      <div className="flex justify-between items-center xl:gap-5 2xl:gap-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-[35px]">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/map__icon.png"
            width={24}
            height={24}
            alt="location"
            className="w-[24px] h-[24px]"
          />
         <div>
         <p className="text-xs font-medium text-black">Location</p>
          <a
            href="location:1003 Caledonia Road Toronto"
            className="text-black font-bold text-base"
          >
            1003 Caledonia Road Toronto
          </a>
         </div>
        </div>

        <div className="">
          <div className="flex items-center gap-2 bg__color__btn py-1 px-3">
            <Image
              src="/assets/icons/phone__icon.png"
              width={28}
              height={28}
              alt="phone icon"
              className="w-[28px] h-[28px]"
            />
            <a
              href="tel:416 996-2409"
              className="text-white font-bold text-base"
            >
              416 996-2409
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
