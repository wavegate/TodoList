import { ReactNode } from "react";
import styles from "./CurvedBlock.module.css";

const CurvedBlock = ({
  padding,
  color,
  zIndex,
  fixed,
  last,
  children,
}: {
  padding: string;
  color: string;
  zIndex?: number;
  fixed?: boolean;
  last?: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <div
        className={`${color} ${
          last ? `${padding} pb-36` : padding
        } rounded-br-[80px] ${styles.CurvedBlock} ${
          fixed ? "fixed w-full" : "relative"
        } ${last ? styles.CurvedBlock__last : ""}`}
        style={{ zIndex: zIndex }}
      >
        {children}
      </div>
    </>
  );
};

export default CurvedBlock;
