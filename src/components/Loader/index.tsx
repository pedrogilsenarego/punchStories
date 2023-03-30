import { Box, Typography } from "@mui/material";
import { Ellipsis } from "react-spinners-css";

interface Props {
  size?: number
  color?: string
  customMessage?: string
}

const Loader = ({ size = 100, color, customMessage }: Props) => {
  return (
    <Box style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Ellipsis
        size={size}
        color={color || '#ffffff66'}
        style={{

          top: 0,
          bottom: 0,
          marginTop: "auto",
          marginBottom: "auto",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Typography fontSize="4rem">{customMessage}</Typography>
    </Box>
  )
}

export default Loader