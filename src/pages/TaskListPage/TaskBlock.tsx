import { Tab } from "@headlessui/react";
import CurvedBlock from "../../components/CurvedBlock";
import Task from "./components/Task";
import { twMerge } from "tailwind-merge";
import styles from "./TaskBlock.module.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleTaskCompletion } from "../../features/taskLists/taskListsReducer";

const TaskBlock = ({ className }: { className?: string }) => {
  const { taskListId } = useParams();
  const taskList = useSelector((state: RootState) =>
    state.taskLists.taskLists.find(
      (taskList) => taskList.taskListId === taskListId
    )
  );

  const dispatch = useDispatch();

  const completeTask = (taskId: string) => {
    dispatch(toggleTaskCompletion({ taskId, taskListId }));
  };

  return (
    <>
      <CurvedBlock
        zIndex={1}
        className={twMerge(
          `flex-1 bg-white rounded-br-[40px] after:w-[40px] after:h-[40px] min-h-0`,
          className
        )}
      >
        <div className={`flex flex-col overflow-auto max-h-full`}>
          <Tab.Group>
            <Tab.List className={`flex justify-center gap-12 mb-4`}>
              <Tab className={`relative ${styles.Tab}`}>Today</Tab>
              <Tab>Tomorrow</Tab>
              <Tab>Week</Tab>
            </Tab.List>
            <hr></hr>

            <Tab.Panels>
              <Tab.Panel className={`flex justify-center`}>
                <div className="grid grid-cols-[auto_auto] gap-3 mt-8">
                  {taskList &&
                    taskList.tasks.map((task) => {
                      return (
                        <Task
                          checked={task.completed}
                          name={task.description}
                          time={task.time}
                          completeTask={() => completeTask(task.taskId)}
                          key={task.taskId}
                        />
                      );
                    })}
                </div>
              </Tab.Panel>
              <Tab.Panel>Second tab</Tab.Panel>
              <Tab.Panel>Third tab</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </CurvedBlock>
    </>
  );
};

export default TaskBlock;
