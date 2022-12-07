import { useNavigate } from "react-router-dom";
import CurvedBlock from "../../components/CurvedBlock";

const HeadingBlock = ({ padding }: { padding: string }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <CurvedBlock padding={padding} color="bg-black" zIndex={1000}>
        <div className={`h-[12vh] flex flex-col justify-between`}>
          <div
            className="h-4 w-4 border-white border-t-4 border-l-4 -rotate-45"
            onClick={goBack}
          ></div>
          <h1>
            <span className="block text-white text-4xl font-medium tracking-tighter">
              Hello
            </span>
            <span className="block text-white text-5xl font-bold">Daniel</span>
          </h1>
        </div>
      </CurvedBlock>
    </>
  );
};

export default HeadingBlock;
