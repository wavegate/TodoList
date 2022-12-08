import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CurvedBlock from "./CurvedBlock";

type Icon = "back" | "cancel";

const HeadingBlock = ({
  className,
  title,
  icon,
}: {
  className?: string;
  title: string;
  icon: Icon;
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <CurvedBlock
        className={twMerge(
          `bg-black rounded-br-[40px] after:w-[40px] after:h-[40px] drop-shadow-[0px_0px_16px_rgba(0,0,0,0.6)] after:drop-shadow-[0px_0px_16px_rgba(0,0,0,0.6)]`,
          className
        )}
        zIndex={1000}
      >
        <div className={`flex justify-center relative`}>
          {icon === "back" && (
            <div
              className="h-4 w-4 border-white border-t-4 border-l-4 -rotate-45 absolute left-1 top-[8px] hover:cursor-pointer"
              onClick={goBack}
            ></div>
          )}
          {icon === "cancel" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-6 h-6 text-white absolute left-1 top-[4px] hover:cursor-pointer"
              onClick={goBack}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <h1 className={`text-2xl text-white font-medium`}>{title}</h1>
        </div>
      </CurvedBlock>
    </>
  );
};

export default HeadingBlock;
