import { Button as MuiButton, Typography } from "@mui/material";
import { Colors } from "../../../constants/pallette"


interface Props {
  label: string;
  propsLabel?: any
  onClick?: () => void;
  borderRadius?: string;
  children?: JSX.Element
  props?: any
}

const Button = ({ label, onClick, borderRadius, children, props, propsLabel }: Props) => {
  return (
    <>
      <MuiButton
        style={{
          ...props,
          backgroundColor: props.backgroundColor || Colors.darkGrey,
          color: "white",
          borderRadius: borderRadius || "40px",
          paddingTop: props.paddingVertical || "10px",
          paddingBottom: props.paddingVertical || "10px",
          paddingLeft: props.paddingHorizontal || "60px",
          paddingRight: props.paddingHorizontal || "60px",
        }}
        onClick={onClick}
      >
        {children}
        <Typography
          style={{
            ...propsLabel,
            fontSize: propsLabel.fontSize || "20px",
            marginLeft: "10px",
            textTransform: propsLabel.textTransform || "uppercase",
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
