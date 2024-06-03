import Image from "next/image";

const UpperNavbar = () => {
  return (
    <nav className=" hidden lg:block ">
      <div className="flex justify-between xl:gap-5 2xl:gap-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-[35px]">
        <div className="w-full flex items-center gap-x-4 xl:gap-x-5 2xl:gap-x-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-9">
          <div className="flex items-center gap-x-1">
            <Image
              src="/assets/images/message.png"
              width={23}
              height={23}
              alt="message icon"
              className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
            />
            <h5 className="text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[14px] text-black">
              Best Construction Services Company
            </h5>
          </div>

          <div className="flex items-center gap-x-1">
            <Image
              src="/assets/images/email.png"
              width={23}
              height={23}
              alt="email icon"
              className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
            />
            <h5 className="text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[14px] text-black">
              informational@yahoo.com
            </h5>
          </div>
        </div>

        <div className="w-2/5">
        <div className="flex justify-end items-center gap-1 4xl:gap-1.5 5xl:gap-2">
          <h3 className="text-[11px] 3xl:text-[12px] 4xl:text-[13px] 5xl:text-[14px] text-black">
            Follow Us:
          </h3>
          <div className="flex items-center gap-x-2 2xl:gap-x-3 3xl:gap-x-4 4xl:gap-x-5 5xl:gap-x-6">
            <Image
              src="/assets/socials/facebook.png"
              width={20}
              height={20}
              className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
              alt="facebook"
            />
            <Image
              src="/assets/socials/x.png"
              width={20}
              height={20}
              className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
              alt="x"
            />
            <Image
              src="/assets/socials/insta.png"
              width={20}
              height={20}
              className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
              alt="instagram"
            />
            <Image
              src="/assets/socials/in.png"
              width={20}
              height={20}
              className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
              alt="linkedin"
            />
            <Image
              src="/assets/socials/google.png"
              width={20}
              height={20}
              className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
              alt="google"
            />
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperNavbar;
