import { twMerge } from "tailwind-merge";
import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";
import OtherList from "./components/OtherList";

const FooterBlock = ({ className }: { className?: string }) => {
  return (
    <>
      <CurvedBlock
        className={twMerge(`after:content-none rounded-br-[60px]`, className)}
      >
        <div className={`text-white flex justify-between items-center mb-6`}>
          <div className={`text-2xl font-medium`}>My List</div>
          <AddNewButton
            onClick={() => console.log("button pressed.")}
            className={`h-10 w-10 bg-neutral-700 font-light text-3xl`}
          />
        </div>
        <OtherList />
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
