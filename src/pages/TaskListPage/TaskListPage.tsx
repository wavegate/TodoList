import FooterBlock from "./FooterBlock";
import HeadingBlock from "../../components/HeadingBlock";
import TaskBlock from "./TaskBlock";
import { useParams } from "react-router-dom";

const TaskListPage = () => {
  const padding = "p-8";

  const { taskListId } = useParams();

  return (
    <>
      <div className={`min-h-screen flex flex-col bg-black`}>
        <HeadingBlock className={`${padding}`} title="All tasks" icon="back" />
        <TaskBlock className={`${padding}`} />
        {/* Will need to handle non-existing taskListId later */}
        <FooterBlock className={`${padding}`} taskListId={taskListId || ""} />
      </div>
    </>
  );
};

export default TaskListPage;
