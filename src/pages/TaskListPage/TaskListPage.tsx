import FooterBlock from "./FooterBlock";
import HeadingBlock from "./HeadingBlock";
import TodosBlock from "./TodosBlock";

const TaskListPage = () => {
  const padding = "p-8";
  return (
    <>
      <div className={`min-h-screen flex flex-col bg-black`}>
        <HeadingBlock padding={padding} />
        <TodosBlock padding={padding} />
        <FooterBlock padding={padding} />
      </div>
    </>
  );
};

export default TaskListPage;
