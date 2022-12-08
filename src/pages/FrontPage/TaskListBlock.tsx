import { MouseEventHandler } from "react";
import CurvedBlock from "../../components/CurvedBlock";

const TaskListBlock = ({
  zIndex,
  name,
  number,
  className,
  onClick,
}: {
  zIndex: number;
  name: string;
  number: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <>
      <CurvedBlock className={className} zIndex={zIndex} onClick={onClick}>
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
