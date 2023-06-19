import { Typography } from "@mui/material";
import { Template } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import { generalConstants } from "../../../constants/general";
import "./index.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Book } from "../../../slicer/books/books.types";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";

const Template2 = ({ storyData }: Template) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(new Image(150, 150));
  const story = useSelector<State, Book>((state) => state.books.book);
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
          height: "60vh",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
            bottom: "20px",
            right: generalConstants.PADDING,
            width: "30%",
          }}
        >
          <Typography
            style={{
              fontSize: "18px",
              color: "#ffffffa9",
              textAlign: "right",
              fontFamily: "spaceMono",
            }}
          >
            {story?.punchLines[0] || ""}
          </Typography>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontSize: "150px",
              fontFamily: "spaceMono",
            }}
          >
            _{story?.name}
          </Typography>
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontFamily: "spaceMono",
              fontSize: "120px",
              textTransform: "uppercase",
              lineHeight: "35px",
            }}
          >
            {story?.age}
          </Typography>
        </div>
        <div
          style={{
            marginTop: "100px",
            columns: 2,
            columnGap: "30px",
            textAlign: "justify",
            position: "relative",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              width: "300px",
              position: "absolute",
              height: "150px",
              backgroundColor: "white",
              top: 0,
              left: "calc(50% - 150px)",
              right: 0,
            }}
          >
            <Typography
              style={{
                fontSize: "23px",
                fontWeight: 800,
                lineHeight: "28px",
                fontFamily: "spaceMono",
              }}
            >
              {story?.punchLines[1]}
            </Typography>
          </div>
          <div
            style={{
              float: "left",
              width: "80px",
              height: "100px",
              margin: "0 0px 0px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: "70px", fontWeight: "40px", fontFamily: "spaceMono" }}>
              {story?.resume?.[0]}
            </Typography>
          </div>
          <div
            style={{
              float: "right",

              width: "150px",
              height: "150px",
              margin: "0 0px 0px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>

          <div ref={textRef}>
            <Typography style={{ fontFamily: "spaceMono" }}>{story?.resume?.substring(1)}</Typography>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginBottom: "100px",
          width: "100%",
          justifyContent: "space-around",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        {story?.content2?.map((image, index) => {
          return (
            <img
              key={index}
              alt=''
              src={image}
              height='600px'
              style={{ objectFit: "contain" }}
            />
          );
        })}
      </div>
      <Typography
        style={{
          fontSize: "18px",
          color: "#150d0da9",
          textAlign: "center",
          marginBottom: "100px",
          fontFamily: "spaceMono"
        }}
      >
        {story?.ps || ""}
      </Typography>
    </>
  );
};

export default Template2;
