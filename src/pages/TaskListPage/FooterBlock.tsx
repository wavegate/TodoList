import AddNewButton from "../../components/AddNewButton";
import CurvedBlock from "../../components/CurvedBlock";

const FooterBlock = ({ padding }: { padding: string }) => {
  return (
    <>
      <CurvedBlock padding={padding} color="bg-black" last>
        My List + Home Work
      </CurvedBlock>
    </>
  );
};

export default FooterBlock;
