import AddNewButton from "../../components/AddNewButton";
import HeadingBlock from "./HeadingBlock";
import TaskListBlock from "./TaskListBlock";
import { faker } from "@faker-js/faker";
import { useRef, useState } from "react";

type Task = {
  name: string;
  number: number;
};

const FrontPage = () => {
  const lastBlock = useRef<HTMLDivElement>(null);

  const padding = "p-8";

  const colors = ["bg-[#4C9CFF]", "bg-[#8F6EFF]", "bg-[#442DE3]"];

  const [tasks, setTasks] = useState<Task[]>([
    { name: "Gym", number: 8 },
    { name: "Work", number: 22 },
    { name: "Home", number: 13 },
  ]);

  const addNewTask = () => {
    setTasks([
      ...tasks,
      {
        name: faker.random.words(2),
        number: faker.datatype.number(50),
      },
    ]);
    lastBlock.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <>
      <div
        className={`min-h-screen ${
          colors[(tasks.length - 1) % colors.length]
        } relative`}
      >
        <HeadingBlock padding={padding} />
        {tasks.map((task, index) => {
          return (
            <TaskListBlock
              padding={padding}
              zIndex={999 - index}
              color={colors[index % colors.length]}
              name={task.name}
              number={task.number}
              key={index}
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
