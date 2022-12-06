import AddNewButton from "../../components/AddNewButton";
import HeadingBlock from "./HeadingBlock";
import TaskListBlock from "./TaskListBlock";

const FrontPage = () => {
  const padding = "p-8";

  const colors = ["bg-[#4C9CFF]", "bg-[#8F6EFF]", "bg-[#442DE3]"];

  const tasks = [
    { name: "Gym", number: 8 },
    { name: "Work", number: 22 },
    { name: "Home", number: 13 },
    { name: "Home", number: 13 },
    { name: "Home", number: 13 },
    { name: "Home", number: 13 },
    { name: "Home", number: 13 },
  ];

  return (
    <>
      <div
        className={`min-h-screen ${colors[(tasks.length - 1) % colors.length]}`}
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
              last={index === tasks.length - 1}
            />
          );
        })}
        <AddNewButton />
      </div>
    </>
  );
};

export default FrontPage;
