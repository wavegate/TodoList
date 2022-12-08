import { RefObject } from "react";
import CurvedBlock from "../../components/CurvedBlock";
import styles from "./TaskListBlock.module.css";

const TaskListBlock = ({
  zIndex,
  name,
  number,
  className,
  id,
}: {
  zIndex: number;
  name: string;
  number: number;
  className?: string;
  id: string;
}) => {
  return (
    <>
      <CurvedBlock className={className} zIndex={zIndex} id={id}>
        <div
          className={`h-16 flex justify-end items-center
          `}
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
