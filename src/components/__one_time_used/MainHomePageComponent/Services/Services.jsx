import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const ourServices = [
  {
    imgUrl: "/assets/images/services1.png",
    title: "Home Renovation",
    desc: `Transform your living space into the home of your dreams with our expert home renovation services. Whether you're looking to revamp a single room or undertake a complete overhaul, our team of skilled professionals will work closely with you to bring your vision to life.`,
  },
  {
    imgUrl: "/assets/images/services2.png",
    title: "Kitchen Renovation",
    desc: `Transform your culinary space into a masterpiece with our kitchen renovation services. From sleek modern designs to cozy traditional aesthetics, we bring your vision to life with expert craftsmanship and attention to detail. Elevate functionality and style simultaneously, creating a hub.
    `,
  },
  {
    imgUrl: "/assets/images/services3.png",
    title: "Bathroom Renovations",
    desc: `Revitalize your home's sanctuary with our expert bathroom renovation services. From modern upgrades to timeless classics, we specialize in transforming into a space that reflects your style and enhances functionality. Our team of skilled professionals ensures meticulous attention.`,
  },
];

const Services = () => {
  return (
    <div className="our__service__box">
      <div className="container">
        <div className=" !px-[35px] md:px-0 common__padding__top">
          <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.services__IconTxt} />
          </div>
          <p className="mt-4 lg:mb-[25px] mb-[15px] text-[28px] md:text-3xl lg:text-4xl text-dark leading-normal text-center font-medium">
            Our General Contractors Services{" "}
            <span className="text-primary">in Toronto</span>
          </p>
          <div className="mt-7 md:mt-[35px]">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 2xl:gap-[27px] ">
              {ourServices.map((serv, index) => (
                <ServiceCard key={index} serv={serv} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
