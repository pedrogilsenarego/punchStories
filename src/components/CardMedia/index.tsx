import { useState } from "react";
import { CardMedia as MuiCardMedia, Typography } from "@mui/material";

interface Props {
  image: string | undefined;
  alt?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  borderRadius?: string;

}

const CardMedia = ({
  image,
  alt,
  onClick,
  height,
  width,
  borderRadius,

}: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div style={{ position: "relative" }}>
      {imageLoading && (
        <Typography
          color='black'
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            marginTop: "auto",
            marginBottom: "auto",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Loading...
        </Typography>
      )}


      <MuiCardMedia
        onLoad={() => setImageLoading(false)}

        style={{
          borderRadius: borderRadius ?? "0px",
          cursor: "pointer",
          opacity: imageLoading ? 0 : 1,
          objectFit: "cover"
        }}
        component='img'
        height={height || "auto"}

        width={width || "auto"}
        image={image}
        alt={alt || ""}
        onClick={handleClick}
      />
    </div>
  );
};

export default CardMedia;
