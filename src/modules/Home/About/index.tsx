import { Box, Typography, Container, Divider, useTheme, useMediaQuery } from "@mui/material";
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
  const dispatch = useDispatch()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  const scrollToL = useSelector<State>(
    (state) => state.general.scrollTo
  );

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
      justifyContent='center'
      alignItems={mobile ? "start" : 'center'}
      ref={contactsRef}
      style={{ backgroundColor: Colors.darkGrey, paddingBottom: mobile ? "30px" : "140px" }}
    >
      <Container maxWidth={"xl"}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'


        >
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            mt={mobile ? "50px" : "140px"}
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
            mt={mobile ? "15px" : '30px'}
            fontSize={mobile ? "14px" : '20px'}
            color='#ffffff66'
            style={{ fontFamily: "SpaceMono", textAlign: "justify" }}
          >
            Este projeto nasce com a irrequietude que é necessária para falar
            com e sobre pessoas, sejam conhecidas ou desconhecidas, e coletar os
            seus momentos de impacto.<br /><br />

            As histórias que serão contadas são de
            pessoas reais, que se “despem” para expor os seus momentos de perda,
            dor, alegria e angústia. Estas pessoas, embora reais, poderão surgir
            nas suas histórias com nomes fictícios, de modo a protegerem o
            impacto da sua própria história noutros.<br /><br />
            Uma boa história é
            intemporal e pode mudar atitudes.<br /><br />
            Quero criar impactos!<br /><br />
            Ass. Teresa Sá.
          </Typography>
        </Box>
        <Divider
          style={{
            marginTop: "60px",
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
