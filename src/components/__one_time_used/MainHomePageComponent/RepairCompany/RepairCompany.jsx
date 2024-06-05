import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "./RepairCompany.css";

const RepairCompany = () => {
  return (
    <div>
      <div className="full__section_l_p">
        <div className=" grid md:grid-cols-7 grid-cols-1 gap-10 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
        <div className="md:col-span-3">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon text={headingIconText.repairCompany__IconTxt} />
            </div>
            <h3 className="text-[28px] md:text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px]  leading-[35px] font-bold text-primary md:text-start text-center">
            Toronto's Stucco Repair <br /> <span className="text-black"> Company</span>

            </h3>
            <p className="text-lg font-normal md:text-start text-center py-[10px]">
            Kirgil Stucco Design is Toronto's premier stucco repair company, dedicated to restoring the integrity and beauty of residential and commercial properties. With years of experience in the industry, we specialize in repairing and renovating all types of stucco finishes, from traditional to modern styles. Our team of skilled professionals takes pride in delivering high-quality workmanship and exceptional customer service on every project. Whether it's repairing cracks, restoring texture, or completely transforming the look of your exterior, our company ensures reliable solutions tailored to your needs. We prioritize durability and aesthetics, using premium materials and proven techniques to achieve long-lasting results. Trust us for expert stucco repair services that enhance the curb appeal and value of your property in the Greater Toronto Area.
              </p>
            
          </div>
          <div className=" md:col-span-4 flex justify-center items-center ">
            <div className="">
              <Image
                src="/assets/images/Repair_Company.png"
                width={964}
                height={532}
                alt="RepairCompany image"
                className=""
              />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default RepairCompany;