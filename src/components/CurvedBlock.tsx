import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CurvedBlock.module.css";

const CurvedBlock = ({
  padding,
  color,
  zIndex,
  fixed,
  last,
  first,
  id,
  flex,
  children,
}: {
  padding: string;
  color: string;
  zIndex?: number;
  fixed?: boolean;
  last?: boolean;
  first?: boolean;
  id?: string;
  flex?: boolean;
  children: ReactNode;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/tasks/${id}`);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${color} ${
          last ? `${padding} pb-36` : padding
        } rounded-br-[80px] ${styles.CurvedBlock} ${
          fixed ? "fixed w-full" : "relative"
        } ${last ? styles.CurvedBlock__last : ""} ${
          first ? `${padding} pt-[43vh]` : padding
        } ${flex ? `flex-grow` : ""}`}
        style={{ zIndex: zIndex }}
      >
        {children}
      </div>
    </>
  );
};

export default CurvedBlock;
