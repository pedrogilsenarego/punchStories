import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../../../constants/pallette";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";
import { scrollTo } from "../../../slicer/general/general.actions";
import { State } from "../../../slicer/types";
import { i18n } from "../../../translations/i18n";

const About = () => {
  const navigate = useNavigate();
  const contactsRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollToL = useSelector<State>((state) => state.general.scrollTo);

  const handleScrollToContacts = () => {
    if (null !== contactsRef.current) {
      window.scrollTo({
        top: contactsRef.current.offsetTop - (mobile ? 70 : 100),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollToL === ROUTE_PATHS.ABOUT) {
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
        backgroundColor: Colors.darkGrey,
        paddingBottom: mobile ? "30px" : "0px",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth={"xl"}>
        <Box
          display="flex"
          flexDirection={!mobile ? "row" : "column"}
          justifyContent="space-between"
          mt={mobile ? "50px" : "100px"}
        >
          {!mobile && (
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                alt=""
                width="100%"
                height="600px"
                style={{ objectFit: "contain" }}
                src="https://firebasestorage.googleapis.com/v0/b/punchstories-9c307.appspot.com/o/stories%2FTeresa%20S%C3%A1%2C%2034%20anos%2C%20alfacinha%20(Lisboa%2C%20Portugal)%2Fteresa%20-bio%20(1).webp?alt=media&token=9950dab4-79d8-4a88-a0a7-9ef699b727ca"
              />
            </div>
          )}
          <div style={{ width: mobile ? "100%" : "50%", height: "100%" }}>
            <Typography
              onClick={() => navigate(ROUTE_PATHS.ADMIN)}
              fontSize={mobile ? "20px" : "40px"}
              color="white"
              fontWeight={800}
              style={{
                textAlign: mobile ? "justify" : "end",
                textTransform: "uppercase",
                letterSpacing: "5px",
                fontFamily: "SpaceMono",
              }}
            >
              {i18n.t("modules.about.title")}
            </Typography>
            <Typography
              mt={mobile ? "15px" : "70px"}
              fontSize={mobile ? "14px" : "20px"}
              color="#ffffff66"
              style={{
                textAlign: mobile ? "justify" : "end",
                fontFamily: "SpaceMono",
              }}
              dangerouslySetInnerHTML={{
                __html: i18n.t("modules.about.mainText"),
              }}
            />
          </div>
          {mobile && (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <img
                alt=""
                width="100%"
                height="400px"
                style={{ objectFit: "cover" }}
                src="https://firebasestorage.googleapis.com/v0/b/punchstories-9c307.appspot.com/o/stories%2FTeresa%20S%C3%A1%2C%2034%20anos%2C%20alfacinha%20(Lisboa%2C%20Portugal)%2Fteresa%20-bio%20(1).webp?alt=media&token=9950dab4-79d8-4a88-a0a7-9ef699b727ca"
              />
            </div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
