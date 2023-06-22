import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../../constants/routes";
import { Book } from "../../../../slicer/books/books.types";
import CardMedia from "../../../../components/CardMedia";
import { useMemo, useState } from "react";

interface Props {
  mobile: boolean;
  pos: number;
  item: Book;
}

const Element = ({ mobile, pos, item }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();

  const randomOrders = useMemo(() => {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 3));
  }, []);

  const randomPunchlineIndex = useMemo(() => {
    return Math.floor(Math.random() * item.punchLines.length);
  }, [item.punchLines]);

  if (!item) return <></>;
  return (
    <>
      {mobile && (
        <Typography
          fontSize="14px"
          style={{
            color: hover ? "#ffffff8d" : "#131212",
            fontFamily: "spaceMono",
            textAlign: "justify",
            marginTop: "20px",

          }}
        >
          <b>#{item?.postNumber}</b>_{item?.name}
        </Typography>
      )}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={pos}
        onClick={() =>
          navigate(ROUTE_PATHS.STORY.replace(":id", item?.documentID) || "")
        }
        style={{ width: "100%", display: "flex", columnGap: "10px" }}
      >
        <div
          style={{
            width: mobile ? "50%" : "25%",
            opacity: hover ? 0.2 : 1,
            transition: "all 1.5s ease-in-out",
            order: randomOrders[0],
          }}
        >
          <CardMedia
            image={
              item && item.content2 && item.content2.length > 0
                ? item.content2[0]
                : ""
            }
            height={hover ? "500px" : `300px`}
          />
        </div>
        <div
          style={{
            width: mobile ? "50%" : "25%",
            opacity: hover ? 0.4 : 1,
            transition: "all 1.5s ease-in-out",
            order: randomOrders[1],
          }}
        >
          <CardMedia
            image={
              item && item.content2 && item.content2.length > 0
                ? item.content2[1]
                : ""
            }
            height={hover ? "500px" : `300px`}
          />
        </div>
        {!mobile && (<div
          style={{
            width: mobile ? "33.3%" : "25%",
            opacity: hover ? 0.6 : 1,
            transition: "all 1.5s ease-in-out",
            order: randomOrders[2],
          }}
        >
          <CardMedia
            image={
              item && item.content2 && item.content2.length > 0
                ? item.content2[2]
                : ""
            }
            height={hover ? "500px" : `300px`}
          />
        </div>)}
        {!mobile && (<Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            cursor: "pointer",
            width: "25%",

            transition: "all 1.5s ease-in-out",
            backgroundColor: hover ? "#131212" : "white",
            padding: "10px",
            order: randomOrders[0],
          }}
        >
          <Typography
            fontSize="1.5rem"
            style={{
              color: hover ? "#ffffff8d" : "#131212",
              fontFamily: "spaceMono",
              textAlign: "center",

            }}
          >
            {hover ? item?.name : item?.punchLines[randomPunchlineIndex]}
          </Typography>
        </Box>)}

      </div>
      {mobile && (
        <Typography
          fontSize="14px"
          style={{
            color: hover ? "#ffffff8d" : "#131212",
            fontFamily: "spaceMono",
            textAlign: "justify",

          }}
        >
          "{item?.punchLines[randomPunchlineIndex]}"
        </Typography>
      )}
    </>
  );
};

export default Element;
