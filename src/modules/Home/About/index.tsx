import {
  Box,
  Typography,
  Container,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../../constants/pallette";

import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { i18n } from "../../../translations/i18n";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollTo } from "../../../slicer/general/general.actions";
import { State } from "../../../slicer/types";

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
      display='flex'
      flexDirection='column'

      alignItems={mobile ? "start" : "center"}
      ref={contactsRef}
      style={{
        backgroundColor: Colors.darkGrey,
        paddingBottom: mobile ? "30px" : "0px",
        minHeight: "100vh"
      }}
    >
      <Container maxWidth={"xl"}>
        <Box display='flex' flexDirection='column' justifyContent="space-between">
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            mt={mobile ? "50px" : "50px"}
            fontSize={mobile ? "20px" : "40px"}
            color='white'
            fontWeight={800}
            style={{
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
            color='#ffffff66'
            style={{
              fontFamily: "SpaceMono",
              textAlign: "justify",

            }}
            dangerouslySetInnerHTML={{
              __html: i18n.t("modules.about.mainText"),
            }}
          />
        </Box>
        <Divider
          style={{
            marginTop: "150px",
            backgroundColor: "#ffffff66",
            width: "100%",
            height: "1px",
          }}
        />
      </Container>
    </Box>
  );
};

export default About;
