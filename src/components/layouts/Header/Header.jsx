import Image from "next/image";
import UpperNavbar from "./UpperNavbar";
import "./Header.css";
import Link from "next/link";
import { UtilsModule } from "@/utils/nav-menus";
import logo from "../../../../public/assets/logo/header-logo.png";

const Header = () => {
  return (
    <header className="custom-container">
      <nav className=" pl-6 md:pl-8 lg:pl-24 xl:pl-28 2xl:pl-32 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]  py-1 main__header">
        <div className="flex items-center gap-x-4 xl:gap-x-8 2xl:gap-x-12 3xl:gap-x-16 4xl:gap-x-20 5xl:gap-x-[90px]">
          <Link href="/">
            <Image
              src={logo}
              width={115}
              height={57}
              alt="logo"
              className="w-[115px] lg:w-[130px] xl:w-[140px] 2xl:w-[150px] 3xl:w-[160px] 4xl:w-[170px] 5xl:w-[180px] h-[57px] 2xl:h-[60px] 3xl:h-[70px] 4xl:h-[80px] 5xl:h-[90px]"
            />
          </Link>

          <div className=" pr-6 md:pr-8 lg:pr-24 xl:pr-28 2xl:pr-32 3xl:pr-40 4xl:pr-52 5xl:pr-[285px] w-full">
            <div className="w-full">
              <UpperNavbar />
            </div>

            <div className="hidden lg:block">
            <div className="w-full h-[1px] bg-white lg:bg-primary my-3 " />
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
              <div className="w-full sm:w-full lg:w-[250px] flex items-center justify-end  gap-x-6 md:gap-x-7 lg:gap-x-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/phone-call.png"
                    width={28}
                    height={28}
                    alt="canada leaf"
                    className="w-[23px] 4xl:w-[26px] 5x:w-[28px] h-[23px] 4xl:h-[26px] 5xl:h-[28px]"
                  />
                  <a
                    href="tel:(416) 996-2409"
                    className="text-black font-bold xs:text-base sm:text-[18px] 4xl:text-lg 5xl:text-[20px] "
                  >
                    (416) 996-2409
                  </a>
                </div>
                <div className="block lg:hidden">
                  <Image
                    src="/assets/images/menu__logo.png"
                    width={22}
                    height={22}
                    alt="Menu"
                    className="w-[22px] h-[22px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
