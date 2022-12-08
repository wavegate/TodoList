import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

const AddNewButton = ({
  onClick,
  className,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <>
      <button
        className={twMerge(
          `rounded-full bg-black w-12 h-12 flex justify-center items-center text-4xl text-white`,
          className
        )}
        style={{ zIndex: 1000 }}
        onClick={onClick}
      >
        +
      </button>
    </>
  );
};

export default AddNewButton;
