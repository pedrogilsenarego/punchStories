import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CardMedia from "../../../../components/CardMedia";
import { ROUTE_PATHS } from "../../../../constants/routes";
import { Book } from "../../../../slicer/books/books.types";
import { State } from "../../../../slicer/types";

interface Props {
  mobile: boolean;
  pos: number;
  item: Book;
}

const Element = ({ mobile, pos, item }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const lang = useSelector<State, string>((state) => state.general.lang);
  const randomOrders = useMemo(() => {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const randomPunchlineIndex = useMemo(() => {
    return Math.floor(Math.random() * item?.punchLines?.length);
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
              item && item?.content2 && item?.content2?.length > 0
                ? item?.content2[1]
                : ""
            }
            height={hover ? "500px" : `300px`}
          />
        </div>
        {!mobile && (
          <div
            style={{
              width: mobile ? "33.3%" : "25%",
              opacity: hover ? 0.6 : 1,
              transition: "all 1.5s ease-in-out",
              order: randomOrders[2],
            }}
          >
            <CardMedia
              image={
                item && item?.content2 && item?.content2?.length > 0
                  ? item.content2[2]
                  : ""
              }
              height={hover ? "500px" : `300px`}
            />
          </div>
        )}
        {!mobile && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              height: hover ? "500px" : `300px`,
              cursor: "pointer",
              width: "25%",
              overflowY: "hidden",
              transition: "all 1.5s ease-in-out",
              backgroundColor: hover ? "#131212" : "white",
              padding: "10px",
              order: randomOrders[0],
            }}
          >
            <Typography
              fontSize="1.3rem"
              style={{
                color: hover ? "#ffffff8d" : "#131212",
                fontFamily: "spaceMono",
                textAlign: "center",
              }}
            >
              {hover
                ? item?.name
                : lang === "PT"
                ? item?.punchLines[randomPunchlineIndex]
                : item?.punchLinesEN[randomPunchlineIndex]}
            </Typography>
          </Box>
        )}
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
          "
          {lang === "PT"
            ? item?.punchLines[randomPunchlineIndex]
            : item?.punchLinesEN[randomPunchlineIndex]}
          "
        </Typography>
      )}
    </>
  );
};

export default Element;
