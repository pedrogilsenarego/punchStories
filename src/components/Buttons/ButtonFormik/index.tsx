import { Button as MuiButton, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallette";
import { useFormikContext } from "formik";

interface Props {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  disabled?: boolean

}

const Button = ({ label, backgroundColor, borderColor, color, disabled }: Props) => {
  const { submitForm } = useFormikContext();
  return (
    <>
      <MuiButton
        disabled={disabled}
        style={{
          cursor: disabled ? "default" : "pointer",
          backgroundColor: backgroundColor || disabled ? "lightGrey" : Colors.tealc,
          color: color || "white",
          border: borderColor ? `solid 1px ${borderColor}` : "auto",
          borderRadius: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "10px"

        }}
        onClick={() => {

          submitForm()
        }}
      >
        <Typography style={{
          fontSize: "12px", fontWeight: 700,
        }}>
          {label}
        </Typography>
      </MuiButton>
    </>
  );
};

export default Button;
