import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import Link from "next/link";

const TrustUs = () => {
  return (
    <div>
      <div className="bg-[#FFF9EE]">
        <div className=" container">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
            <div className=" md:col-span-3 flex justify-center items-center ">
              <div className="">
                <Image
                  src="/assets/images/Why_You_Trust_Us.png"
                  width={620}
                  height={510}
                  alt="Our Experience image"
                  className="w-dvw md:h-[530px] lg:h-[570px] xl:h-full "
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.trustUs__IconTxt} />
              </div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center font-medium">
              Trusted General Contractors{" "}
                <span className="text-primary">in Toronto</span>
              </p>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
              Embark on your dream renovation journey with National Remodelling & General Contracting Inc., your trusted general contractor in Toronto. With a sterling reputation built on integrity, quality, and professionalism, we excel in bringing your renovation dreams to life. From residential to commercial projects, our experienced team delivers exceptional craftsmanship and attention to detail. Whether it's a kitchen remodel, bathroom renovation, or entire  <Link className="text-blue-900 underline" href="https://en.wikipedia.org/wiki/Home_improvement">home makeover,</Link> we prioritize customer satisfaction every step of the way. With transparent communication and a commitment to deadlines, we ensure a stress-free experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
