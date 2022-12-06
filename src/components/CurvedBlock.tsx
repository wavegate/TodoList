import { ReactNode } from "react";
import styles from "./CurvedBlock.module.css";

const CurvedBlock = ({
  padding,
  color,
  zIndex,
  last,
  children,
}: {
  padding: string;
  color: string;
  zIndex?: number;
  last?: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <div
        className={`relative ${color} ${padding} rounded-br-[80px] ${
          last ? "" : styles.CurvedBlock__after
        } ${styles.CurvedBlock__before}`}
        style={{ zIndex: zIndex }}
      >
        {children}
      </div>
    </>
  );
};

export default CurvedBlock;
