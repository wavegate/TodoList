import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";
import OtherList from "./components/OtherList";

const FooterBlock = ({ padding }: { padding: string }) => {
  return (
    <>
      <CurvedBlock padding={padding} color="bg-black" last>
        <div className={`text-white`}>My List + Home Work</div>
        <OtherList />
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
