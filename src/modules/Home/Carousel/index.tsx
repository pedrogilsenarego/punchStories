import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "./Button";
import Button2 from "../../../components/Buttons/Button";
import { useState, useEffect } from "react";
import "./index.css";
import { handleFetchCarrouselHelper } from "../../../services/general";
import { handleFetchListStories } from "../../../services/stories";
import { Book } from "../../../slicer/books/books.types";
import { useQuery } from "react-query";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { i18n } from "../../../translations/i18n";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useSelector<State, string>((state) => state.general.lang)

  const handleFetchCarrousel = async () => {
    try {
      const list = await handleFetchCarrouselHelper();
      const data = await handleFetchListStories(list);
      return data || [];
    } catch (error) {
      throw error;
    }
  };

  const {
    data: carrouselData,
    isLoading: loadingBooks,
    error: errorBooks,
  } = useQuery<Book[]>("carrousel", () => handleFetchCarrousel(), {
    staleTime: 10,
    cacheTime: 10,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (carrouselData === undefined) return;
      if (index + 1 < carrouselData.length) setIndex(index + 1);
      else setIndex(0);
    }, 7000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (carrouselData === undefined) return <></>;

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
        <Container maxWidth='xl' disableGutters={mobile}>
          <div
            style={{
              display: "flex",
              height: "50vh",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row", // set to column direction

            }}
          >
            <div
              style={{
                width: mobile ? "60%" : "30%",
                position: mobile ? "absolute" : "inherit",
                zIndex: 5000,
                paddingLeft: mobile ? "13px" : "0px",


              }}
            >
              <Typography
                fontSize={mobile ? "18px" : "40px"}
                color='white'
                style={{

                  fontFamily: "SpaceMono",
                  textTransform: "uppercase",
                }}
              >
                {carrouselData[index]?.name}
              </Typography>
              {!mobile && (
                <Typography
                  className='textResume'
                  fontSize={"15px"}
                  color='whitesmoke'
                  style={{
                    marginTop: "15px",
                    opacity: 0.5,
                    fontFamily: "SpaceMono",
                  }}
                >
                  "{lang === "PT" ? carrouselData[index]?.resume : carrouselData[index]?.resumeEN}"
                </Typography>
              )}
              {!mobile && (<Typography fontSize={"15px"}>..."</Typography>)}
              <Typography
                fontSize={"15px"}
                color='whitesmoke'
                style={{
                  marginTop: mobile ? "15px" : "20px",
                  fontFamily: "SpaceMono",

                  transition: "all 0.8s ease-out",
                  opacity: hover ? 1 : 0.5,
                }}
              >
                "{lang === "PT" ? carrouselData[index]?.punchLines[0] : carrouselData[index]?.punchLinesEN[0]}"
              </Typography>
              {/* <Button2
                onClick={() =>
                  navigate(
                    ROUTE_PATHS.STORY.replace(
                      ":id",
                      carrouselData[index].documentID
                    )
                  )
                }
                props={{
                  backgroundColor: "transparent",
                  marginTop: mobile ? "20px" : "60px",
                  border: "solid 2px #ffffff66",
                  paddingHorizontal: "6px",
                  paddingVertical: "6px",
                }}
                propsLabel={{
                  color: "#ffffff66",
                  fontSize: "16px",
                  textTransform: "lowercase",
                }}
                borderRadius='4px'
                label={i18n.t("modules.home.carrousel.button")}
              /> */}
            </div>
            <div
              style={{
                height: "100%",
                width: mobile ? "100%" : "70%",
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
                  objectFit: mobile ? "cover" : "contain",
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

            right: mobile ? "8%" : "1.5%",
            bottom: 0,
            top: 0,
          }}
        >
          {carrouselData.map((item, pos) => {
            return (
              <Button pos={pos} setIndex={setIndex} index={index} key={pos} />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
