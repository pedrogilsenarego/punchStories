import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../../constants/routes";
import { Book } from "../../../../slicer/books/books.types";
import CardMedia from "../../../../components/CardMedia";
import { useState } from "react";
interface Props {
  mobile: boolean;
  pos: number;
  item: Book;
}

const Element = ({ mobile, pos, item }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  if (!item) return <></>;
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={pos}
        onClick={() =>
          navigate(ROUTE_PATHS.STORY.replace(":id", item?.documentID) || "")
        }
        style={{ position: "relative", width: "33%" }}
      >
        <div
          style={{ opacity: hover ? 0 : 1, transition: "all 1.5s ease-in-out" }}
        >
          <CardMedia
            image={
              item && item.content2 && item.content2.length > 0
                ? item.content2[0]
                : ""
            }
            height='500px'
          />
        </div>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
          mt='1px'
          style={{
            position: "absolute",
            opacity: hover ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
            top: "40%",
            backgroundColor: "#131212",
            padding: "10px"
          }}
        >
          <Typography
            fontSize='1.5rem'
            style={{
              color: "#ffffff8d",
              fontFamily: "spaceMono",
              textAlign: "center",
              opacity: hover ? 1 : 0,

            }}
          >
            {item?.title}
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default Element;
