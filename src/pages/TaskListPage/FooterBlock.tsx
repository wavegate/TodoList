import { twMerge } from "tailwind-merge";
import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";
import OtherList from "./components/OtherList";

const FooterBlock = ({ className }: { className?: string }) => {
  return (
    <>
      <CurvedBlock className={twMerge(`after:content-none`, className)}>
        <div className={`text-white`}>My List + Home Work</div>
        <OtherList />
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
