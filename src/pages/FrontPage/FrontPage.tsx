import AddNewButton from "../../components/AddNewButton";
import HeroBlock from "./HeroBlock";
import TaskListBlock from "./TaskListBlock";
import { faker } from "@faker-js/faker";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createTaskList,
  selectAllTaskLists,
} from "../../features/taskLists/taskListsReducer";

const FrontPage = () => {
  const lastBlock = useRef<HTMLDivElement>(null);

  const padding = "p-8";

  const colors = ["bg-[#4C9CFF]", "bg-[#8F6EFF]", "bg-[#442DE3]"];

  const navigate = useNavigate();

  const taskLists = useSelector(selectAllTaskLists);

  const dispatch = useDispatch();

  const addNewTask = () => {
    const name = faker.random.words(2);
    dispatch(createTaskList(name));
  };

  useEffect(() => {
    lastBlock.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [taskLists]);

  const goToTaskList = (taskListId: string) => {
    navigate(`/tasklists/read/${taskListId}`);
  };

  return (
    <>
      <div
        className={`min-h-screen ${
          colors[(taskLists.length - 1) % colors.length]
        } relative`}
      >
        <HeroBlock className={`${padding}`} />
        {taskLists.map((taskList, index) => {
          return (
            <TaskListBlock
              zIndex={999 - index}
              className={`${colors[index % colors.length]} ${
                index === 0 ? `${padding} pt-[43vh]` : `${padding}`
              } ${
                index === taskLists.length - 1 ? `after:content-none pb-36` : ``
              }`}
              name={taskList.name}
              number={taskList.tasks.length}
              onClick={() => goToTaskList(taskList.id)}
              key={taskList.id}
            />
          );
        })}
        <AddNewButton
          onClick={addNewTask}
          className={`fixed bottom-8 right-8`}
        />
        <div ref={lastBlock}></div>
      </div>
    </>
  );
};

export default FrontPage;
