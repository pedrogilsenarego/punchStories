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
            width: mobile ? "100%" : "40%",
            height: "100vh",
          }}
          src={story?.content2[1]}
          alt=""
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
            size="2.5rem"
            color="white"
            style={{ marginLeft: "-5px" }}
          />
        </div>

        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={()=>mobile?setHover(!hover):null}
          style={{
            position: "relative",
            top: mobile?"15vh":"20vh",
            left: mobile ? "10px" : "35%",
            height: "25vw",
            display: "flex",

            cursor: "pointer",
            transition: "all 1.5s ease-in-out",
          }}
        >
          <Typography
            style={{
              position: "absolute",
              top: "-35px",
              right: mobile ? "0px" : "10px",
              fontSize: mobile?"20px":"24px",
              color: "#000000c9",
              fontWeight: "800",
              fontFamily: "spaceMono",

              textTransform: "uppercase",
            }}
          >
            #{story?.postNumber}_{story?.name}
          </Typography>
          <img
            src={story?.content2[0]}
            alt=""
            style={{
              width: mobile ? "70vw" : "25vw",
              height: mobile ? "70vw" : "25vw",
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
              width: mobile ? "calc(70vw - 20px)" : "calc(25vw - 20px)",
              height: mobile
                ? !hover
                  ? "calc(70vw - 20px)"
                  : "calc(72vw - 20px)"
                : !hover
                ? "calc(25vw - 20px)"
                : "calc(27vw - 20px)",
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
                fontSize: mobile?"16px":"24px",
                fontFamily: "spaceMono",
                textAlign: "center",
              }}
            >
              "{story?.punchLines[0] || ""}"
            </Typography>
          </div>
        </div>

        <div
          style={{
            position: mobile ? "absolute" : "inherit",
            width: "100%",
            paddingRight: mobile ? "10px" : "60px",
            paddingLeft: mobile ? "10px" : "0px",
            paddingTop: mobile?"0px":"20px",
            marginTop: mobile?hover ? "60vh" : "56vh":hover ? "71vh" : "67vh",
            transition: "all 1.5s ease-in-out",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <div
            style={{
              backgroundColor: mobile ? "#ffffffB3" : "transparent",
              width: mobile ? "100%" : "75%",
              padding: mobile ? "10px" : "0px",
            }}
          >
            <Typography
              style={{
                fontFamily: "spaceMono",
                fontSize:mobile?"14px":"16px",
                marginTop: mobile?"0px":"20px",
                textAlign: "justify",
              }}
              dangerouslySetInnerHTML={{
                __html: lang === "PT" ? story?.resume : story?.resumeEN,
              }}
            />

            <Typography
              style={{
                textAlign: "justify",
                fontFamily: "spaceMono",
                marginTop: "30px",
                fontSize: "18px",
                marginBottom: "60px",
                fontWeight: "bold",
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
