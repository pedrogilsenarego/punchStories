import { Box, Typography, Container, Divider } from "@mui/material";
import { Colors } from "../../../constants/pallette";
import Social from "./Social";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { i18n } from "../../../translations/i18n";
const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      style={{ backgroundColor: Colors.darkGrey, paddingBottom: "50px" }}
    >
      <Container maxWidth={"md"}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            mt='80px'
            fontSize='50px'
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
            mt='30px'
            fontSize='20px'
            color='#ffffff66'
            style={{ fontFamily: "SpaceMono" }}
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
            marginTop: "100px",
            backgroundColor: "#ffffff66",
            width: "100%",
            height: "1px",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <Social />
        </div>
      </Container>
    </Box>
  );
};

export default About;
