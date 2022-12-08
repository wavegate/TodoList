import { MouseEventHandler, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CurvedBlock.module.css";
import { twMerge } from "tailwind-merge";

const CurvedBlock = ({
  zIndex,
  className,
  onClick,
  children,
}: {
  zIndex?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className={twMerge(
          `relative rounded-br-[80px] ${styles.CurvedBlock} ${
            onClick ? `hover:cursor-pointer` : ""
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
