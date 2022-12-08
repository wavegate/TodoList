import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

const Task = ({
  checked,
  name,
  time,
  completeTask,
  className,
}: {
  checked: boolean;
  name: string;
  time: string;
  completeTask: MouseEventHandler<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <>
      <div className="relative">
        <input
          type="checkbox"
          className={`appearance-none w-5 h-5 border-2 rounded-full ${
            checked ? `bg-purple-800 border-purple-800` : `border-black`
          } mt-1`}
          onClick={completeTask}
        ></input>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            className=" absolute top-[6px] left-[2px] w-4 h-4 text-white pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col">
        <div
          className={`font-medium ${
            checked ? `text-neutral-500 line-through decoration-2` : ``
          }`}
        >
          {name}
        </div>
        <div className="text-sm">{time}</div>
      </div>
    </>
  );
};

export default Task;
