import { ReactNode } from "react";
import styles from "./CurvedBlock.module.css";

const CurvedBlock = ({
  padding,
  color,
  zIndex,
  children,
}: {
  padding: string;
  color: string;
  zIndex?: number;
  children: ReactNode;
}) => {
  return (
    <>
      <div
        className={`relative ${color} ${padding} rounded-br-[80px] ${styles.CurvedBlock}`}
        style={{ zIndex: zIndex }}
      >
        {children}
      </div>
    </>
  );
};

export default CurvedBlock;
