import { Box, Typography, Container } from "@mui/material";
import { Colors } from "../../../constants/pallette";
const About = () => {
  return (
    <Box
      display='flex'
      flexDirection="column"
      justifyContent='center'
      alignItems="center"
      style={{ backgroundColor: Colors.darkGrey, paddingBottom: "200px" }}
    >
      <Container maxWidth={"lg"}>
        <Box display='flex'
          flexDirection="column"
          justifyContent='center'
          alignItems="center">
          <Typography
            mt='150px'
            fontSize='50px'
            color='white'
            fontWeight={800}
            style={{ textTransform: "uppercase", letterSpacing: "5px" }}
          >
            About Me
          </Typography>
          <Typography
            mt='50px'
            fontSize='20px'
            color='#ffffff66'


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
      </Container>
    </Box>
  );
};

export default About;
