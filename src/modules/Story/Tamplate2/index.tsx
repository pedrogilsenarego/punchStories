import { Box, Typography } from "@mui/material";
import { Template } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import { generalConstants } from "../../../constants/general";
import "./index.css";
import { useEffect, useRef } from "react";

const Template2 = ({ storyData }: Template) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(
    new Image(150, 150)
  );

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
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "40%",
            backgroundColor: "red",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "Url(https://archzine.fr/wp-content/uploads/2016/03/danse-contemporaine-tenue-de-danse-moderne.jpg)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#00000066",
            top: "2vw",
            left: "2vw",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoIosArrowBack
            size='3rem'
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
          <Typography
            style={{
              fontSize: "70px",
              color: "black",
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            Sara Freitas
          </Typography>
          <img
            src='https://images.unsplash.com/photo-1642653386791-f1e6bb4c3ec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80'
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
            width: "30%",
          }}
        >
          <Typography style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Typography>
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography style={{ whiteSpace: "pre-line", fontSize: "150px" }}>
            Taking
          </Typography>
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontSize: "200px",
              textTransform: "uppercase",
              lineHeight: "35px",
            }}
          >
            Over
          </Typography>
        </div>
        <div
          style={{
            marginTop: "100px",
            columns: 2,
            columnGap: "30px",
            textAlign: "justify",
          }}
        >
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
            <Typography style={{ fontSize: "40px", fontWeight: "40px" }}>
              L{" "}
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
          >
            <div></div>
          </div>

          <div ref={textRef}>
            <Typography>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborumLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborumLorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>

          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;
