import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Template } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Book } from "../../../slicer/books/books.types";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";

const Template1 = ({ storyData }: Template) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(new Image(150, 150));
  const story = useSelector<State, Book>((state) => state.books.book);
  const lang = useSelector<State, string>((state) => state.general.lang);
  const [hover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  const numberPictures = story?.content2.length;
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  useEffect(() => {
    const textElem = textRef.current;
    const imgElem = imgRef.current;

    if (textElem && imgElem) {
      const words = textElem.innerHTML.split(" ");
      const middleWordIndex = Math.floor(words.length / 2);
      imgElem.src = "path/to/your/image.jpg";
      imgElem.alt = "example";
      imgElem.style.display = "inline";
      imgElem.style.width = "150px";
      imgElem.style.height = "150px";
      words.splice(middleWordIndex, 0, imgElem.outerHTML);
      textElem.innerHTML = words.join(" ");
    }
  }, []);
  const xsNumber = () => {
    if (numberPictures === 1 || mobile) return 12;
    if (numberPictures === 2) return 6;
    if (numberPictures >= 3) return 4;
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#ffffff",
          position: "relative",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
            position: "fixed",
            width: "40%",
            height: "100vh",
          }}
          src={story?.content2[1]}
          alt=''
        />
        <div
          onClick={() => navigate(ROUTE_PATHS.HOME)}
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#827f7f66",
            top: "2vw",
            left: "2vw",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack
            size='2.5rem'
            color='white'
            style={{ marginLeft: "-5px" }}
          />
        </div>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "relative",
            top: "20vh",
            left: "35%",
            height: "25vw",
            display: "flex",

            cursor: "pointer",
            transition: "all 1.5s ease-in-out",
          }}
        >
          <img
            src={story?.content2[0]}
            alt=''
            style={{
              width: "25vw",
              height: "25vw",
              objectFit: "cover",

              border: "solid 10px #ffffff",
              transition: "all 1.5s ease-in-out",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "30px",
              top: "20px",
              marginTop: "10px",
              backgroundColor: "whiteSmoke",
              width: "calc(25vw - 20px)",
              height: !hover ? "calc(25vw - 20px)" : "calc(27vw - 20px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",

              opacity: hover ? 1 : 0,

              transition: "all 1.5s ease-in-out",
              boxShadow: "6px 6px 10px #00000039",
            }}
          >
            <Typography
              style={{
                fontSize: "24px",
                fontFamily: "spaceMono",
                textAlign: "justify",
              }}
            >
              "{story?.punchLines[0] || ""}"
            </Typography>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            paddingRight: "60px",
            paddingTop: "40px",
            marginTop: hover ? "71vh" : "67vh",
            transition: "all 1.5s ease-in-out",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              width: "75%",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                color: "black",
                fontWeight: "800",
                fontFamily: "spaceMono",
                textTransform: "uppercase",
              }}
            >
              #{story?.postNumber}_{story?.name},{story?.age}
            </Typography>

            <Typography
              style={{
                fontFamily: "spaceMono",
                marginTop: "14px",
                textAlign: "justify",
              }}
            >
              {lang === "PT" ? story?.resume : story?.resumeEN}
            </Typography>

            <Grid
              container
              marginTop='40px'
              marginBottom="40px"
              columnSpacing='10px'
              rowSpacing='10px'
            >
              {story?.content2?.map((image, index) => {
                return (
                  <Grid
                    item
                    xs={xsNumber()}
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      alt=''
                      src={image}
                      height='500px'
                      width='100%'
                      style={{ objectFit: mobile ? "cover" : "contain" }}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Typography
              style={{
                fontFamily: "spaceMono",
                marginTop: "30px",
                marginBottom: "60px"
              }}
            >
              {lang === "PT" ? story?.ps : story?.psEN}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template1;
