import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";
import { selectAllTaskLists } from "../../features/taskLists/taskListsReducer";
import { RootState } from "../../redux/store";
import OtherList from "./components/OtherList";
import styles from "./FooterBlock.module.css";

const FooterBlock = ({
  className,
  taskListId,
}: {
  className?: string;
  taskListId: string;
}) => {
  const taskList = useSelector((state: RootState) =>
    state.taskLists.taskLists.find(
      (taskList) => taskList.taskListId === taskListId
    )
  );

  const taskLists = useSelector(selectAllTaskLists);
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
          <div className={`text-2xl font-medium`}>
            {taskList && taskList.name}
          </div>
          <AddNewButton
            onClick={handleClick}
            className={`h-10 w-10 bg-neutral-700 font-light text-3xl`}
          />
        </div>
        <div className={`flex gap-8 overflow-x-auto pb-8 ${styles.OtherLists}`}>
          {taskLists.map((taskList) => {
            return <OtherList taskList={taskList} />;
          })}
        </div>
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
