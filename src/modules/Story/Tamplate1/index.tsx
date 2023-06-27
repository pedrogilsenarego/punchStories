import { Typography } from "@mui/material";
import { Template } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";
import { useEffect, useRef } from "react";
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
  return (
    <>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#bcc0be",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{
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
          style={{
            position: "absolute",

            top: "2vw",
            right: "2vw",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontWeight: 800 }}>04, May 2023</Typography>
        </div>
        <div style={{ position: "absolute", top: "20%", left: "35%" }}>
          <img
            src={story?.content2[0]}
            alt=''
            style={{
              width: "25vw",
              height: "25vw",
              objectFit: "cover",
              border: "solid 10px #bcc0be",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "calc(20% + 30vw + 10px)",
            left: "calc(40% + 10px)",
            width: "calc(19.5% - 20px)",
          }}
        >
          <Typography style={{ fontSize: "18px", fontFamily: "spaceMono" }}>
            "{story?.punchLines[0] || ""}"
          </Typography>
        </div>
        <div
          style={{
            height: "95vh",
            width: "42.5%",
            padding: "30px",
            marginTop: "40px",
          }}
        >
          <div
            className='glass-background'
            style={{
              height: "100%",
              overflowY: "scroll",
              padding: "15px 15px 15px 30px",
              borderRadius: "10px",
              paddingTop: "20px",
              backgroundColor: "",
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

            <Typography style={{ fontFamily: "spaceMono", marginTop: "14px" }}>
              {lang === "PT" ? story?.resume : story?.resumeEN}
            </Typography>
            <Typography
              style={{
                fontFamily: "spaceMono",
                marginTop: "20px",
                marginBottom: "20px",
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
