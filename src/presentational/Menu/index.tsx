import { Container } from "@mui/material";
import { i18n } from "../../translations/i18n";
import "./index.css";
import { BsInstagram } from "react-icons/bs";
import { CardMedia as Image } from "@mui/material"
import logo from "../../assets/images/PunchStories.png";

const Menu = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        position: "fixed",
        top: 0,
        zIndex: 3000,


      }}
    >
      <Container
        maxWidth='xl'
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          position: "relative"

        }}
      >
        <img
          height='100px'
          src={logo}
          style={{ cursor: "pointer" }}
          alt='logo'
        />
        <div style={{ display: "flex", alignItems: "center", columnGap: "20px" }}>
          <p className='textItems'>{i18n.t("menuBar.about")}</p>
          <p className='textItems'>{i18n.t("menuBar.stories")}</p>
          <p className='textItems'>{i18n.t("menuBar.contacts")}</p>
          <BsInstagram className='textItems' size='1.5rem' />
        </div>
      </Container>
    </div>
  );
};

export default Menu;
