import { useState } from "react";
import { CardMedia as MuiCardMedia } from "@mui/material";
import Loader from "../Loader";

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
        <Loader size={40} />
      )}


      <MuiCardMedia
        onLoad={() => setImageLoading(false)}

        style={{
          borderRadius: borderRadius ?? "0px",
          cursor: "pointer",
          opacity: imageLoading ? 0 : 1,
          objectFit: "cover",
          transition: "all 1.5s ease-in-out",
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
