import UpScroller from "../presentational/UpScroller";
import Header from "../presentational/Menu";
import { useMediaQuery, useTheme } from "@mui/material";




const HomepageLayout = (props: any) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))


  return (
    <div style={{ minHeight: window.innerHeight }}>
      <UpScroller />
      <Header />
      <div style={{ marginTop: mobile ? "60px" : "100px" }}>
        {props.children}
      </div>

    </div>
  );
};

export default HomepageLayout;
