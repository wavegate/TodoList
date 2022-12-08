import styles from "./OtherList.module.css";

const OtherList = () => {
  return (
    <>
      <div
        className={`relative text-white min-w-[10rem] w-10 h-48 bg-purple-800 rounded-3xl p-6 ${styles.OtherList}`}
      >
        <div className={`font-semibold text-2xl`}>Home</div>
        <div className={`text-sm`}>13 tasks</div>
      </div>
    </>
  );
};

export default OtherList;
