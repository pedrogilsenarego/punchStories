import { Container, useMediaQuery, useTheme } from "@mui/material";
import { i18n } from "../../translations/i18n";
import "./index.css";
import { BsInstagram } from "react-icons/bs";
import logo from "../../assets/images/PunchStories.png";
import { ROUTE_PATHS } from "../../constants/routes";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../slicer/types";
import { scrollTo } from "../../slicer/general/general.actions";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loc = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentUser = useSelector<State, any>(
    (state) => state.user.currentUser
  );
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
          position: "relative",
        }}
      >
        <img
          onClick={() =>
            loc.pathname === ROUTE_PATHS.HOME
              ? dispatch(scrollTo(ROUTE_PATHS.HOME))
              : navigate(ROUTE_PATHS.HOME)
          }
          height={mobile ? "70px" : "100px"}
          src={logo}
          style={{ cursor: "pointer", }}
          alt='logo'
        />
        <div
          style={{ display: "flex", alignItems: "center", columnGap: mobile ? "15px" : "20px" }}
        >
          <p
            style={{ fontSize: mobile ? "12px" : "16px" }}
            onClick={() => dispatch(scrollTo(ROUTE_PATHS.BOOKS))}
            className='textItems'
          >
            {i18n.t("menuBar.stories")}
          </p>
          <p
            style={{ fontSize: mobile ? "12px" : "16px" }}
            onClick={() => dispatch(scrollTo(ROUTE_PATHS.ABOUT))}
            className='textItems'
          >
            {i18n.t("menuBar.about")}
          </p>
          <p
            style={{ fontSize: mobile ? "12px" : "16px" }}
            onClick={() => dispatch(scrollTo(ROUTE_PATHS.CONTACT))}
            className='textItems'
          >
            {i18n.t("menuBar.contacts")}
          </p>
          <BsInstagram className='textItems' size={mobile ? "1rem" : '1.5rem'} />
        </div>
      </Container>
    </div>
  );
};

export default Menu;
