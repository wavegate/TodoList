import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CurvedBlock from "../../components/CurvedBlock";

const HeadingBlock = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <CurvedBlock
        className={twMerge(
          `bg-black rounded-br-[40px] after:w-[40px] after:h-[40px] drop-shadow-[0px_0px_16px_rgba(0,0,0,0.6)]`,
          className
        )}
        zIndex={1000}
      >
        <div className={`flex justify-center relative`}>
          <div
            className="h-4 w-4 border-white border-t-4 border-l-4 -rotate-45 absolute left-1 top-[8px]"
            onClick={goBack}
          ></div>
          <h1 className={`text-2xl text-white font-medium`}>All Tasks</h1>
        </div>
      </CurvedBlock>
    </>
  );
};

export default HeadingBlock;
