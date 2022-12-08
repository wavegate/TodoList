import FooterBlock from "./FooterBlock";
import HeadingBlock from "../../components/HeadingBlock";
import TaskBlock from "./TaskBlock";

const TaskListPage = () => {
  const padding = "p-8";
  return (
    <>
      <div className={`min-h-screen flex flex-col bg-black`}>
        <HeadingBlock className={`${padding}`} title="All tasks" icon="back" />
        <TaskBlock className={`${padding}`} />
        <FooterBlock className={`${padding}`} />
      </div>
    </>
  );
};

export default TaskListPage;
