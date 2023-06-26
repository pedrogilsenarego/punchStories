import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { ROUTE_PATHS } from "../../../constants/routes";
import { scrollTo } from "../../../slicer/general/general.actions";
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { i18n } from "../../../translations/i18n";
import { useNavigate } from "react-router";
import { BsInstagram } from "react-icons/bs";

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
      window.location.href = "instagram://user?username=punch.stories";
      setTimeout(() => {
        window.location.href =
          "https://www.instagram.com/punchstories2023/?igshid=MzNlNGNkZWQ4Mg%3D%3D";
      }, 1000);
    } else {
      window.open(
        "https://www.instagram.com/punchstories2023/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
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
      display='flex'
      flexDirection='column'
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
          display='flex'
          flexDirection='column'
          justifyContent='center'
          style={{ marginTop: mobile ? "20px" : "150px" }}
        >
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            fontSize={mobile ? "20px" : "40px"}
            color='white'
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
            color='#ffffff66'
            style={{
              fontFamily: "SpaceMono",
              textAlign: "justify",
            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("modules.contacts.mainText"),
            }}
          />
        </Box>
        <div style={{ marginBottom: mobile ? "0px" : "250px", marginTop: mobile ? "30px" : "0px" }}>
          <Divider
            style={{

              backgroundColor: "#ffffff66",
              width: "100%",
              height: "1px",
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <BsInstagram
              style={{ cursor: "pointer" }}
              onClick={handleInstagram}
              size={mobile ? '2rem' : "3rem"}
              color='#ffffff95'
            />
          </div>
        </div>

      </Container>
    </Box >
  );
};

export default Contact;
