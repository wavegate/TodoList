import { Tab } from "@headlessui/react";
import CurvedBlock from "../../components/CurvedBlock";
import Task from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./TaskBlock.module.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../features/taskLists/taskListsReducer";
import { useParams } from "react-router-dom";
import { faker } from "@faker-js/faker";

// type Task = {
//   name: string;
//   time: string;
//   completed: boolean;
//   id: string;
// };

const TaskBlock = ({ className }: { className?: string }) => {
  const { taskListId } = useParams();
  const taskList = useSelector((state: RootState) =>
    state.taskLists.taskLists.find((taskList) => taskList.id === taskListId)
  );
  // const [tasks, setTasks] = useState<Task[]>([
  //   {
  //     name: "Cloture proposition Daniel",
  //     time: "10:00 am",
  //     completed: true,
  //     id: uuidv4(),
  //   },
  //   { name: "Walk the dog", time: "13:10 pm", completed: false, id: uuidv4() },
  //   { name: "Call David", time: "14:30 pm", completed: false, id: uuidv4() },
  //   { name: "Go to the gym", time: "18:30 pm", completed: false, id: uuidv4() },
  // ]);

  // const completeTask = (id: string) => {
  //   setTasks((prevTasks) => {
  //     const newTasks = prevTasks.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, completed: !task.completed };
  //       } else {
  //         return task;
  //       }
  //     });
  //     return newTasks;
  //   });
  // };

  const dispatch = useDispatch();

  const completeTask = (id: string) => {
    const description = faker.random.words(5);
    const time = faker.date
      .betweens("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z", 1)
      .toString();
    // console.log(time);
    dispatch(createTask(taskListId, description, time));
  };

  return (
    <>
      <CurvedBlock
        zIndex={1}
        className={twMerge(
          `flex flex-col flex-grow bg-white rounded-br-[40px] after:w-[40px] after:h-[40px]`,
          className
        )}
      >
        <button onClick={() => completeTask("Asdf")}>Complete</button>
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
                        completeTask={() => completeTask(task.id)}
                        key={task.id}
                      />
                    );
                  })}
              </div>
            </Tab.Panel>
            <Tab.Panel>Second tab</Tab.Panel>
            <Tab.Panel>Third tab</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </CurvedBlock>
    </>
  );
};

export default TaskBlock;
