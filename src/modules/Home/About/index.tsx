import { Box, Typography, Container, Divider } from "@mui/material";
import { Colors } from "../../../constants/pallette";
import Social from "./Social";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { i18n } from "../../../translations/i18n";
const About = () => {
  const navigate = useNavigate()
  return (
    <Box
      display='flex'
      flexDirection="column"
      justifyContent='center'
      alignItems="center"
      style={{ backgroundColor: Colors.darkGrey, paddingBottom: "50px" }}
    >
      <Container maxWidth={"xl"}>
        <Box display='flex'
          flexDirection="column"
          justifyContent='center'
          alignItems="center">
          <Typography
            onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            mt='80px'
            fontSize='50px'
            color='white'
            fontWeight={800}
            style={{ textTransform: "uppercase", letterSpacing: "5px", fontFamily: "SpaceMono" }}
          >
            {i18n.t("modules.about.title")}
          </Typography>
          <Typography
            mt='30px'
            fontSize='20px'
            color='#ffffff66'
            style={{ fontFamily: "SpaceMono" }}

          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>

        </Box>
        <Divider

          style={{
            marginTop: "100px",
            backgroundColor: "#ffffff66",
            width: "100%",
            height: "1px"
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
