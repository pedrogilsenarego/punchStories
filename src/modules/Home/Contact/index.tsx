import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";
import { scrollTo } from "../../../slicer/general/general.actions";
import { State } from "../../../slicer/types";
import { i18n } from "../../../translations/i18n";

const Contact = () => {
  const contactsRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const scrollToL = useSelector<State, string>(
    (state) => state.general.scrollTo
  );
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleScrollToContacts = () => {
    if (null !== contactsRef.current) {
      window.scrollTo({
        top: contactsRef.current.offsetTop - (mobile ? 70 : 100),
        behavior: "smooth",
      });
    }
  };

  const handleInstagram = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "instagram://user?username=_punch_stories";
      setTimeout(() => {
        window.location.href =
          "https://instagram.com/_punch_stories?igshid=MzNlNGNkZWQ4Mg==";
      }, 1000);
    } else {
      window.open(
        "https://instagram.com/_punch_stories?igshid=MzNlNGNkZWQ4Mg==",
        "_blank"
      );
    }
  };

  useEffect(() => {
    if (scrollToL === ROUTE_PATHS.CONTACT) {
      handleScrollToContacts();
      dispatch(scrollTo(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={mobile ? "start" : "center"}
      ref={contactsRef}
      style={{
        backgroundColor: "black",
      }}
    >
      <Container
        maxWidth={"xl"}
        style={{
          display: "flex",
          justifyContent: mobile ? "start" : "space-between",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          style={{ marginTop: mobile ? "20px" : "150px" }}
        >
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            fontSize={mobile ? "20px" : "40px"}
            color="white"
            fontWeight={800}
            style={{
              textTransform: "uppercase",
              letterSpacing: "5px",
              fontFamily: "SpaceMono",
            }}
          >
            {i18n.t("modules.contacts.title")}
          </Typography>
          <Typography
            mt={mobile ? "15px" : "70px"}
            fontSize={mobile ? "14px" : "20px"}
            color="#ffffff66"
            style={{
              fontFamily: "SpaceMono",
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("modules.contacts.mainText"),
            }}
          />
        </Box>
        <div
          style={{
            marginBottom: mobile ? "0px" : "250px",
            marginTop: mobile ? "30px" : "40px",
          }}
        >
          <Divider
            style={{
              backgroundColor: "#ffffff66",
              width: mobile ? "100%" : "50%",
              height: "1px",
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <BsInstagram
              style={{ cursor: "pointer" }}
              onClick={handleInstagram}
              size={mobile ? "2rem" : "2rem"}
              color="#ffffff95"
            />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;
