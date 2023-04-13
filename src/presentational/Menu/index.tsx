import { Container } from "@mui/material";
import { i18n } from "../../translations/i18n";
import "./index.css";
import { BsInstagram } from "react-icons/bs";

const Menu = () => {
  return (
    <div
      style={{

        backgroundColor: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        width: window.innerWidth,
        position: "fixed",
        top: 0,
        zIndex: 3000,


      }}
    >
      <Container
        maxWidth='xl'
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          columnGap: "20px",
        }}
      >
        <p className='textItems'>{i18n.t("menuBar.about")}</p>
        <p className='textItems'>{i18n.t("menuBar.stories")}</p>
        <p className='textItems'>{i18n.t("menuBar.contacts")}</p>
        <BsInstagram className='textItems' size='1.5rem' />
      </Container>
    </div>
  );
};

export default Menu;
