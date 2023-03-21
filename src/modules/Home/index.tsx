
import { i18n } from "../../translations/i18n";
import { Typography, Container, Box, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import Carousel from "./Carousel"







const Home = () => {
  const navigate = useNavigate();
  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("md"))

  return (
    <>
      <Carousel />

    </>
  );
};

export default Home;
