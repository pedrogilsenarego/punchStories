import { Button as MuiButton, Typography } from "@mui/material";
import { useState } from "react";
import { Colors } from "../../../constants/pallette";

interface Props {
  label: string;
  propsLabel?: any;
  onClick?: () => void;
  borderRadius?: string;
  children?: JSX.Element;
  props?: any;
}

const Button = ({
  label,
  onClick,
  borderRadius,
  children,
  props,
  propsLabel,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <>
      <MuiButton
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover
            ? props?.backgroundColor || Colors.darkGrey
            : "transparent",
          color: hover ? "white" : props?.backgroundColor || Colors.darkGrey,
          borderRadius: borderRadius || "4px",
          border: props?.border || "default",
          paddingTop: props?.paddingVertical || "10px",
          paddingBottom: props?.paddingVertical || "10px",
          paddingLeft: props?.paddingHorizontal || "60px",
          paddingRight: props?.paddingHorizontal || "60px",
          ...props,
        }}
        onClick={onClick}
      >
        {children}
        <Typography
          style={{
            ...propsLabel,
            fontSize: propsLabel?.fontSize || "20px",
            marginLeft: "10px",
            textTransform: propsLabel?.textTransform || "uppercase",
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
