import { RefObject } from "react";
import CurvedBlock from "../../components/CurvedBlock";
import styles from "./TaskListBlock.module.css";

const TaskListBlock = ({
  padding,
  zIndex,
  color,
  name,
  number,
  last,
  first,
  id,
}: {
  padding: string;
  zIndex: number;
  color: string;
  name: string;
  number: number;
  last?: boolean;
  first?: boolean;
  id: string;
}) => {
  return (
    <>
      <CurvedBlock
        color={color}
        padding={padding}
        zIndex={zIndex}
        first={first}
        last={last}
        id={id}
      >
        <div
          className={`h-16 flex justify-end items-center ${
            last ? `${padding} pb-36` : padding
          }`}
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
