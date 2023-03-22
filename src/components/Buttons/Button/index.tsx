import { Button as MuiButton, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallette"


interface Props {
  label: string;
  onClick?: () => void;
  borderRadius?: string;
  children?: JSX.Element
}

const Button = ({ label, onClick, borderRadius, children }: Props) => {
  return (
    <>
      <MuiButton
        style={{
          backgroundColor: Colors.darkGrey,
          color: "white",
          borderRadius: borderRadius || "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
        onClick={onClick}
      >
        {children}
        <Typography
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            textTransform: "uppercase",
            letterSpacing: "5px",
          }}
        >
          {label}
        </Typography>
      </MuiButton>
    </>
  );
};

export default Button;
