import { MouseEventHandler } from "react";

const AddNewButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <button
        className="rounded-full bg-black  w-12 h-12 flex justify-center items-center text-4xl text-white fixed bottom-8 right-8"
        style={{ zIndex: 1000 }}
        onClick={onClick}
      >
        +
      </button>
    </>
  );
};

export default AddNewButton;
