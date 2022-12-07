import { Tab } from "@headlessui/react";
import CurvedBlock from "../../components/CurvedBlock";
import Task from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

type Task = {
  name: string;
  time: string;
  completed: boolean;
  id: string;
};

const TodosBlock = ({ padding }: { padding: string }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      name: "Cloture proposition Daniel",
      time: "10:00 am",
      completed: true,
      id: uuidv4(),
    },
    { name: "Walk the dog", time: "13:10 pm", completed: false, id: uuidv4() },
    { name: "Call David", time: "14:30 pm", completed: false, id: uuidv4() },
    { name: "Go to the gym", time: "18:30 pm", completed: false, id: uuidv4() },
  ]);

  const completeTask = (id: string) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
      return newTasks;
    });
  };

  return (
    <>
      <CurvedBlock padding={padding} color="bg-white" zIndex={1} flex>
        <Tab.Group>
          <Tab.List>
            <Tab>Today</Tab>
            <Tab>Tomorrow</Tab>
            <Tab>Week</Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-col gap-3">
                {tasks.map((task) => {
                  return (
                    <Task
                      checked={task.completed}
                      name={task.name}
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

export default TodosBlock;
