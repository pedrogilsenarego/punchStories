
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import List from "./List";
import About from "./About";
import Carousel from "./Carousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { ROUTE_PATHS } from "../../constants/routes";
import { scrollTo } from "../../slicer/general/general.actions";
import { fetchBooks } from "../../slicer/books/books.actions";
import Contact from "./Contact";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router";







const Home = () => {

  const Theme = useTheme()
  const mobile = useMediaQuery(Theme.breakpoints.down("md"))
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const scrollToL = useSelector<State>(
    (state) => state.general.scrollTo
  );

  const handleScrollToList = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  useEffect(() => {
    if (scrollToL === ROUTE_PATHS.HOME) {
      handleScrollToList();
      dispatch(scrollTo(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);

  useEffect(() => {
    const filters = {
      onlyActive: true,
    };
    dispatch(fetchBooks(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Carousel />
      <div style={{ marginTop: "50px" }}>
        <List mobile={mobile} />
      </div>
      <div style={{ marginTop: "80px" }}>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div style={{ position: "relative", padding: "5px", display: "flex", justifyContent: "center" }}>
        <Typography>
          Web Engineering . Pedro Sena Rego
        </Typography>
        <div
          style={{ position: "absolute", right: 0, width: "50px", height: "30px" }}
          onClick={() => navigate(ROUTE_PATHS.ADMIN)}
        />
      </div>
    </>
  );
};

export default Home;
