import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import Button2 from "../../../components/Buttons/Button";
import { useState, useEffect } from "react";
import "./index.css"
import { handleFetchCarrouselHelper } from "../../../services/general";
import { handleFetchListStories } from "../../../services/stories";
import { Book } from "../../../slicer/books/books.types";
import { useQuery } from "react-query";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";




const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate()

  const handleFetchCarrousel = async () => {
    try {
      const list = await handleFetchCarrouselHelper();
      const data = await handleFetchListStories(list);
      return data || []
    } catch (error) {
      throw error;
    }
  };

  const { data: carrouselData, isLoading: loadingBooks, error: errorBooks } = useQuery<Book[]>('carrousel', () =>
    handleFetchCarrousel(),
    {
      staleTime: 30000,
      cacheTime: 30000
    }
  );





  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (carrouselData === undefined) return
      if (index + 1 < carrouselData.length) setIndex(index + 1);
      else setIndex(0);
    }, 7000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (carrouselData === undefined) return <></>

  return (
    <>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: window.innerWidth,
          backgroundColor: "#000000",
          //backgroundColor: "#131212",
          display: "flex",
          position: "relative",
          alignItems: "center",
          transition: "all 0.8s ease-in-out",
          cursor: "pointer",
          columnGap: "20px",
        }}
      >
        <Container maxWidth='xl'>
          <div
            style={{
              display: "flex",
              height: "50vh",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row", // set to column direction
            }}
          >
            <div style={{ width: "30%" }}>
              <Typography
                fontSize={"40px"}
                color='white'
                style={{
                  fontFamily: "SpaceMono",
                  textTransform: "uppercase",
                }}
              >
                {carrouselData[index]?.name}
              </Typography>
              <Typography
                className="textResume"
                fontSize={"15px"}
                color='whitesmoke'
                style={{
                  marginTop: "15px",
                  opacity: 0.5,
                  fontFamily: "SpaceMono",

                }}
              >
                "{carrouselData[index]?.resume}
              </Typography>
              <Typography fontSize={"15px"}>...</Typography>
              <Typography
                fontSize={"15px"}
                color='whitesmoke'
                style={{
                  marginTop: "20px",
                  fontFamily: "SpaceMono",

                  transition: "all 0.8s ease-out",
                  opacity: hover ? 1 : 0.5,
                }}
              >
                "{carrouselData[index]?.punchLines[0]}"
              </Typography>
              <Button2
                onClick={() => navigate(ROUTE_PATHS.STORY.replace(":id", carrouselData[index].documentID))}
                props={{
                  backgroundColor: "transparent",
                  marginTop: "60px",
                  border: "solid 2px #ffffff66",
                  paddingHorizontal: "6px",
                  paddingVertical: "6px"
                }}
                propsLabel={{
                  color: "#ffffff66",
                  fontSize: "16px",
                  textTransform: "lowercase"
                }}
                borderRadius='4px'
                label='Visit Story'
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "70%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center", // center along cross-axis
                justifyContent: "center",
              }}
            >
              <img
                height='100%'
                width='100%'
                src={carrouselData[index].content2[0]}
                alt=''
                style={{
                  objectFit: "contain",
                  transform: "scale(1.2)",

                  filter: "grayscale(80%) opacity(0.89) contrast(150%)",
                }}
              />
            </div>
          </div>
        </Container>
        <Box
          display='flex'
          flexDirection='column'
          rowGap={2}
          justifyContent='center'
          alignItems='center'
          style={{
            position: "absolute",

            right: "1.5%",
            bottom: 0,
            top: 0,
          }}
        >
          {carrouselData.map((item, pos) => {
            return <Button pos={pos} setIndex={setIndex} index={index} key={pos} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
