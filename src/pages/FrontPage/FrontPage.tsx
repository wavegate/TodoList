import AddNewButton from "../../components/AddNewButton";
import HeroBlock from "./HeroBlock";
import TaskListBlock from "./TaskListBlock";
import { faker } from "@faker-js/faker";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  name: string;
  number: number;
  id: string;
};

const FrontPage = () => {
  const lastBlock = useRef<HTMLDivElement>(null);

  const padding = "p-8";

  const colors = ["bg-[#4C9CFF]", "bg-[#8F6EFF]", "bg-[#442DE3]"];

  const [tasks, setTasks] = useState<Task[]>([
    { name: "Gym", number: 8, id: uuidv4() },
    { name: "Work", number: 22, id: uuidv4() },
    { name: "Home", number: 13, id: uuidv4() },
  ]);

  const addNewTask = () => {
    setTasks([
      ...tasks,
      {
        name: faker.random.words(2),
        number: faker.datatype.number(50),
        id: uuidv4(),
      },
    ]);
  };

  useEffect(() => {
    lastBlock.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [tasks]);

  return (
    <>
      <div
        className={`min-h-screen ${
          colors[(tasks.length - 1) % colors.length]
        } relative`}
      >
        <HeroBlock padding={padding} />
        {tasks.map((task, index) => {
          return (
            <TaskListBlock
              padding={padding}
              zIndex={999 - index}
              color={colors[index % colors.length]}
              name={task.name}
              number={task.number}
              first={index === 0}
              last={index === tasks.length - 1}
              id={task.id}
              key={task.id}
            />
          );
        })}
        <AddNewButton onClick={addNewTask} />
        <div ref={lastBlock}></div>
      </div>
    </>
  );
};

export default FrontPage;
