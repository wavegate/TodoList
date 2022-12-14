import { useLocation, useParams } from "react-router-dom";
import HeadingBlock from "../../components/HeadingBlock";
import NewTaskFormBlock from "./NewTaskFormBlock";

const NewTaskPage = () => {
  const padding = `p-8`;

  const {
    state: { taskListId },
  } = useLocation();

  return (
    <>
      <div className={`min-h-screen flex flex-col bg-black relative`}>
        <HeadingBlock
          className={`${padding}`}
          title="New task"
          icon="cancel"
          iconDestination={`/tasklists/read/${taskListId}`}
        />
        <NewTaskFormBlock className={`${padding}`} />
      </div>
    </>
  );
};

export default NewTaskPage;
