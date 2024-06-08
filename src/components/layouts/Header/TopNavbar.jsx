import Image from "next/image";
import Link from "next/link";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <nav className="hidden lg:block container Top__Navbar__bg">
      <div className="flex justify-between xl:gap-5 2xl:gap-6 3xl:gap-x-7 4xl:gap-x-8 5xl:gap-x-[35px]">
        <div className="flex items-center gap-x-1">
          <Image
            src="/assets/socials/clock.png"
            width={23}
            height={23}
            alt="message icon"
            className="w-[15px] 2xl:w-[17px] 3xl:w-[19px] 4xl:w-[21px] 5xl:w-[23px] h-auto 5xl:h-[23px]"
          />
          <h5 className="text-[14px] text-black font-bold">
            Open Hour: SAT - FRI (08:00 PM - 08:00 AM)
          </h5>
        </div>

        <div className="flex items-center gap-x-1">
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

        <div className="">
          <div className="flex justify-end items-center gap-1.5 4xl:gap-2 5xl:gap-3">
            <h5 className="text-[14px] text-black font-bold">Follow Us:</h5>
            <div className="flex items-center gap-x-2 2xl:gap-x-3 3xl:gap-x-4 4xl:gap-x-5 5xl:gap-x-6">
              <>
                <Link
                  href="https://www.instagram.com/kirgilstuccodesigninc?igsh=cm5vdzZ6ZG5pbWVv&utm_source=qr"
                  passHref
                >
                  <img
                    src="/assets/socials/facebook.png"
                    width={20}
                    height={20}
                    className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                    alt="facebook"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.instagram.com/kirgilstuccodesigninc?igsh=cm5vdzZ6ZG5pbWVv&utm_source=qr",
                        "_blank"
                      );
                    }}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/kirgilstuccodesigninc?igsh=cm5vdzZ6ZG5pbWVv&utm_source=qr"
                  passHref
                >
                  <img
                    src="/assets/socials/insta.png"
                    width={20}
                    height={20}
                    className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                    alt="instagram"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.instagram.com/kirgilstuccodesigninc?igsh=cm5vdzZ6ZG5pbWVv&utm_source=qr",
                        "_blank"
                      );
                    }}
                  />
                </Link>
                <Link href="https://g.co/kgs/Xp3ZULF" passHref>
                  <img
                    src="/assets/socials/google.png"
                    width={20}
                    height={20}
                    className="w-[16px] 4xl:w-[18px] 5xl:w-[20px] h-[16px] 4xl:h-[18px] 5xl:h-[20px]"
                    alt="google"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://g.co/kgs/Xp3ZULF", "_blank");
                    }}
                  />
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
