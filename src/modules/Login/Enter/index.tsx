import { Typography } from "@mui/material";

import { i18n } from "../../../translations/i18n";
import EmailPass from "./EmailPass";

const Enter = () => {


  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
      <div
        style={{
          width: "450px",
          display: "flex",
          flexDirection: "column",
          rowGap: "25px",
        }}
      >

      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ height: "1px", width: "45%", backgroundColor: "#00000066" }} />
        <Typography></Typography>
        <div style={{ height: "1px", width: "45%", backgroundColor: "#00000066" }} />
      </div>
      <EmailPass />
    </div>
  );
};

export default Enter;
