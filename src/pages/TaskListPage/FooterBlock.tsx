import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";
import OtherList from "./components/OtherList";
import styles from "./FooterBlock.module.css";

const FooterBlock = ({
  className,
  taskListId,
}: {
  className?: string;
  taskListId: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tasks/create", { state: { taskListId: taskListId } });
  };

  return (
    <>
      <CurvedBlock
        className={twMerge(
          `after:content-none rounded-br-[60px] bg-black`,
          className
        )}
      >
        <div className={`text-white flex justify-between items-center mb-6`}>
          <div className={`text-2xl font-medium`}>My List</div>
          <AddNewButton
            onClick={handleClick}
            className={`h-10 w-10 bg-neutral-700 font-light text-3xl`}
          />
        </div>
        <div className={`flex gap-8 overflow-x-auto pb-8 ${styles.OtherLists}`}>
          <OtherList />
          <OtherList />
          <OtherList />
          <OtherList />
          <OtherList />
          <OtherList />
          <OtherList />
        </div>
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
