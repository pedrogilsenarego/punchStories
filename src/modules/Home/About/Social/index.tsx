import { Box } from "@mui/material";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const Social = () => {
  return (
    <Box display="flex" columnGap={2} style={{ width: "100%" }}>
      <BsInstagram size='2em' color='#ffffff66' style={{ cursor: "pointer" }} />
      <ImFacebook2 size='2em' color='#ffffff66' style={{ cursor: "pointer" }} />
    </Box>
  );
};

export default Social;
