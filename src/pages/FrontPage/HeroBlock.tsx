import CurvedBlock from "../../components/CurvedBlock";

const HeroBlock = ({ className }: { className: string }) => {
  return (
    <>
      <CurvedBlock
        zIndex={1000}
        className={`fixed w-full bg-black ${className}`}
      >
        <div className={`h-[33vh] flex flex-col justify-between`}>
          <div className="flex flex-col gap-1">
            <div className="w-8 h-1 bg-white" />
            <div className="w-8 h-1 bg-white" />
            <div className="w-6 h-1 bg-white" />
          </div>
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

export default HeroBlock;
