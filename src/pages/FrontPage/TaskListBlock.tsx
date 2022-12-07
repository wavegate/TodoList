import { RefObject } from "react";
import CurvedBlock from "../../components/CurvedBlock";
import styles from "./TaskListBlock.module.css";

const TaskListBlock = ({
  padding,
  zIndex,
  color,
  name,
  number,
}: {
  padding: string;
  zIndex: number;
  color: string;
  name: string;
  number: number;
}) => {
  return (
    <>
      <CurvedBlock color={color} padding={padding} zIndex={zIndex}>
        <div
          className={`h-16 flex justify-end items-center ${styles.TaskListBlock}`}
        >
          <div
            className={`grid grid-cols-[auto_auto] gap-12 text-2xl font-semibold text-white`}
          >
            <div className="">{name}</div>
            <div className="w-12 flex justify-center">{number}</div>
          </div>
        </div>
      </CurvedBlock>
    </>
  );
};

export default TaskListBlock;
