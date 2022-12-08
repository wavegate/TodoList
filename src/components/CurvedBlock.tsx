import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CurvedBlock.module.css";
import { twMerge } from "tailwind-merge";

const CurvedBlock = ({
  zIndex,
  className,
  id,
  children,
}: {
  zIndex?: number;
  className?: string;
  id?: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/read/${id}`);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={twMerge(
          `relative rounded-br-[80px] ${styles.CurvedBlock} ${
            id ? `hover:cursor-pointer` : ""
          }`,
          className
        )}
        style={{ zIndex: zIndex }}
      >
        {children}
      </div>
    </>
  );
};

export default CurvedBlock;
