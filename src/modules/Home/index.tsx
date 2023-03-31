
import { useTheme, useMediaQuery } from "@mui/material";


import List from "./List";
import About from "./About";
import DancingCarousell from "../../components/DancingCarousell";







const Home = () => {

  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("md"))

  return (
    <>
      <DancingCarousell />
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
