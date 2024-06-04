import Image from "next/image";

const HeadingIcon = ({ text = "empty text" , classes={} }) => {
  return (
    <div className="flex items-center pb-2">
      <Image src="/assets/icons/heading__icon.png" alt="heading icon" height={26} width={26}/>
      <p className={`text-center text-sm ml-2 ${classes?.textWhite}`}>{text}</p>
    </div>
  );
};

export default HeadingIcon;
