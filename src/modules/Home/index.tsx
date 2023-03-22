
import { i18n } from "../../translations/i18n";
import { Typography, Container, Box, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import Carousel from "./Carousel"
import List from "./List";
import About from "./About";







const Home = () => {
  const navigate = useNavigate();
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("md"))

  return (
    <>
      <Carousel />
      <div style={{ marginTop: "50px" }}>
        <List mobile={mobile} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <About />
      </div>
    </>
  );
};

export default Home;
