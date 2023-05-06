import { Box, Typography } from "@mui/material";
import { i18n } from "../../translations/i18n";

import { Colors } from "../../constants/pallette";
import { useState } from "react";
import Enter from "./Enter";

const Login = () => {
  const [mode, setMode] = useState<"enter" | "register">("enter");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "40px",
        marginTop: "100px"
      }}
    >
      <Typography
        style={{
          textTransform: "uppercase",
          fontSize: "28px",
          fontWeight: 800,
          color: Colors.tealc,
        }}
      >
        Login here
      </Typography>

      <Enter />
    </div>
  );
};

export default Login;
