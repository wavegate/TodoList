import styles from "./OtherList.module.css";

import { TaskList } from "../../../features/taskLists/taskListsReducer";

const OtherList = ({ taskList }: { taskList: TaskList }) => {
  return (
    <>
      <div
        className={`relative text-white min-w-[10rem] w-10 h-48 bg-purple-800 rounded-3xl p-6 ${styles.OtherList}`}
      >
        <div className={`font-semibold text-2xl`}>{taskList.name}</div>
        <div className={`text-sm`}>{taskList.tasks.length} tasks</div>
      </div>
    </>
  );
};

export default OtherList;
