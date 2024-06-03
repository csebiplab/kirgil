const HeadingIcon = ({ text = "empty text" , classes={} }) => {
  return (
    <div className="flex items-center pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="12"
        viewBox="0 0 32 12"
        fill="none"
      >
        <path
          d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM31.7735 6L26 0.226497L20.2265 6L26 11.7735L31.7735 6ZM6 7H26V5H6V7Z"
          fill="#C99B4C"
        />
      </svg>
      <p className={`text-center text-sm ml-1 ${classes?.textWhite}`}>{text}</p>
    </div>
  );
};

export default HeadingIcon;
