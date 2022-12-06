import CurvedBlock from "../../components/CurvedBlock";
import styles from "./TaskListBlock.module.css";

const TaskListBlock = ({
  padding,
  zIndex,
  color,
  name,
  number,
  last,
}: {
  padding: string;
  zIndex: number;
  color: string;
  name: string;
  number: number;
  last?: boolean;
}) => {
  return (
    <>
      <CurvedBlock color={color} padding={padding} zIndex={zIndex} last={last}>
        <div className={`${last ? "mb-24" : ""} flex justify-end items-center`}>
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
