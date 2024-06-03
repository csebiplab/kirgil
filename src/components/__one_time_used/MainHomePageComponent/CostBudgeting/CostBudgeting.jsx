import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const CostBudgeting = () => {
  return (
    <div>
      <div className="bg-[#FFF9EE] hidden 5xl:block">
        <div className="container">
          <div className="grid md:grid-cols-6 grid-cols-1 md:gap-10 lg:gap-20 md:mx-0 mx-[35px] 2xl:py-[100px] lg:py-[70px] py-[50px]">
            <div className="md:col-span-3">
              <div className="flex md:justify-normal justify-center md:items-start items-center text-[14px]">
                <HeadingIcon text={headingIconText.costBudgeting__IconTxt} />
              </div>
              <p className="mt-4 lg:mb-[25px] mb-[15px] md:text-3xl lg:text-4xl text-primary leading-normal font-normal md:text-start text-center">
                Cost Estimation and Budgeting
                <span className="text-black">
                  {" "}
                  with Toronto's General Contractors
                </span>
              </p>
              <p className="text-[18px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px] md:text-start text-center">
                National Remodelling & General Contracting Inc. is your trusted
                partner for cost estimation and budgeting in Toronto. With years
                of experience in the industry, we specialize in providing
                accurate and transparent estimates tailored to your specific
                project needs. Our team of skilled professionals works closely
                with clients to understand their vision and financial
                parameters, ensuring a seamless and cost-effective process from
                start to finish. Whether it's residential renovations,
                commercial construction, or home/kitchen/bathroom remodeling, we
                prioritize quality craftsmanship and attention to detail while
                keeping your budget in mind. Count on our company to deliver
                exceptional results within your budgetary constraints, making
                your dream project a reality without breaking the bank.
              </p>
            </div>

            <div className="relative md:col-span-3 ">
              <div className="absolute z-50 -left-2">
                <div className="w-[243px] h-[243px] bg-primary rounded-full border-[15px] border-white shadow-lg text-center items-center flex justify-center flex-col">
                  <span className="text-[45px] text-white font-bold leading-normal">
                    {" "}
                    24
                  </span>{" "}
                  <span className="text-[20px] font-semibold text-white leading-normal">
                    Year Experience
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 z-10">
                <Image
                  src="/assets/images/Cost_&_Budgeting_2.png"
                  width={433}
                  height={358}
                  alt="CostBudgeting image"
                  className="5xl:w-[433px] 5xl:h-[358px]"
                />
              </div>
              <div className="absolute top-0 right-0 z-0">
                <Image
                  src="/assets/images/Cost_&_Budgeting_1.png"
                  width={437}
                  height={480}
                  alt="CostBudgeting image"
                  className="5xl:w-[437px] 5xl:h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostBudgeting;
