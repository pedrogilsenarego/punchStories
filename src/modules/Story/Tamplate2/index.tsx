import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Template } from "../types";
import { IoIosArrowBack } from "react-icons/io";
import { generalConstants } from "../../../constants/general";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Book } from "../../../slicer/books/books.types";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";

const Template2 = ({ storyData }: Template) => {
  const story = useSelector<State, Book>((state) => state.books.book);

  const [holeOnTextHeigh, setHoleOnTextHeigh] = useState<number>(200)  // Calculate the height
  const [textSegmentsMobile, setTextSegmentsMobile] = useState<any[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(new Image(150, holeOnTextHeigh));
  const typographyRef = useRef<HTMLDivElement>(null);

  const numberPictures = story?.content2.length;
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lang = useSelector<State, string>((state) => state.general.lang);

  const xsNumber = () => {
    if (numberPictures === 1 || mobile) return 12;
    if (numberPictures === 2) return 6;
    if (numberPictures >= 3) return 4;
  };
  const navigate = useNavigate();

  const divideTextWithImages = () => {
    const textSegments = [];
    const segmentSize = Math.ceil(
      lang === "PT"
        ? story?.resume.length
        : story?.resumeEN.length / numberPictures
    );

    let currentPosition = 0;
    for (let i = 0; i < numberPictures; i++) {
      const segment =
        lang === "PT"
          ? story?.resume.substr(currentPosition, segmentSize)
          : story?.resumeEN.substr(currentPosition, segmentSize);
      textSegments.push({ imageIndex: i, segment: segment });

      currentPosition += segmentSize;
    }

    setTextSegmentsMobile(textSegments);
  };

  // useEffect(() => {
  //   if (typographyRef.current && imgRef.current) {
  //     const textHeight = typographyRef.current.offsetHeight;
  //     setHoleOnTextHeigh(textHeight);
  //     imgRef.current.style.height = `${textHeight}px`;
  //   }
  // }, [typographyRef]);

  useEffect(() => {
    if (mobile) divideTextWithImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobile]);

  useEffect(() => {
    if (!mobile) {
      const textElem = textRef.current;
      const imgElem = imgRef.current;

      if (textElem && imgElem) {
        const words = textElem.innerHTML.split(" ");
        const middleWordIndex = Math.floor(words.length / 2);
        imgElem.src = "path/to/your/image.jpg";
        imgElem.alt = "example";
        imgElem.style.display = "inline";
        imgElem.style.width = "150px";
        imgElem.style.height = `${holeOnTextHeigh}px`;
        words.splice(middleWordIndex, 0, imgElem.outerHTML);
        textElem.innerHTML = words.join(" ");
      }

    }
  }, [mobile, holeOnTextHeigh]);

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
            width: mobile ? "60%" : "30%",
          }}
        >
          <Typography
            style={{
              fontSize: mobile ? "12px" : "18px",
              color: "#ffffffa9",
              textAlign: "right",
              fontFamily: "spaceMono",
            }}
          >
            {lang === "PT"
              ? story?.punchLines[1]
              : story?.punchLinesEN[1] || ""}
          </Typography>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: mobile ? "12px" : generalConstants.PADDING,
          paddingRight: mobile ? "12px" : generalConstants.PADDING,
          marginBottom: mobile ? "30px" : "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontSize: mobile ? "20px" : "80px",
              fontFamily: "spaceMono",
            }}
          >
            #{story?.postNumber}_{story?.name}, {story?.age}
          </Typography>
        </div>
        {mobile && (
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: 800,
              lineHeight: "28px",
              fontFamily: "spaceMono",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {lang === "PT" ? story?.punchLines[0] : story?.punchLinesEN[0]}
          </Typography>
        )}

        {!mobile && (
          <div
            style={{
              marginTop: "40px",
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
                //height: `${holeOnTextHeigh}px`,
                backgroundColor: "white",
                top: 0,
                left: "calc(50% - 150px)",
                right: 0,
              }}
            >
              <Typography
                ref={typographyRef}
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  lineHeight: "28px",
                  fontFamily: "spaceMono",
                }}
              >
                {lang === "PT" ? story?.punchLines[0] : story?.punchLinesEN[0]}
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
              <Typography
                style={{
                  fontSize: "70px",
                  fontWeight: "40px",
                  fontFamily: "spaceMono",
                  textTransform: "uppercase",
                }}
                dangerouslySetInnerHTML={{
                  __html: lang === "PT" ? story?.resume?.[0] : story?.resumeEN?.[0],
                }}
              />


            </div>
            <div
              style={{
                float: "right",

                width: "150px",
                height: `${holeOnTextHeigh}px`,
                margin: "0 0px 0px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>

            <div ref={textRef}>
              <Typography style={{ fontFamily: "spaceMono" }}>
                {lang === "PT"
                  ? story?.resume?.substring(1)
                  : story?.resumeEN?.substring(1)}
              </Typography>
            </div>
          </div>
        )}
      </div>

      <Grid
        container
        columnSpacing='10px'
        rowSpacing='10px'
        style={{
          marginBottom: mobile ? "40px" : "100px",
          paddingLeft: mobile ? "15px" : generalConstants.PADDING,
          paddingRight: mobile ? "15px" : generalConstants.PADDING,
        }}
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
              {mobile && textSegmentsMobile.length > 0 && (
                <Typography
                  style={{
                    fontFamily: "spaceMono",
                    textAlign: "justify",
                    marginBottom: "30px",
                  }}
                >
                  {textSegmentsMobile[index].segment}
                </Typography>
              )}
              <img
                alt=''
                src={image}
                height='400px'
                width='100%'
                style={{ objectFit: mobile ? "cover" : "contain" }}
              />
            </Grid>
          );
        })}
      </Grid>
      <Typography
        style={{
          paddingLeft: mobile ? "8px" : "0px",
          paddingRight: mobile ? "8px" : "0px",
          fontSize: "18px",
          color: "#150d0da9",
          textAlign: "center",
          marginBottom: "100px",
          fontFamily: "spaceMono",
        }}
      >
        {lang === "PT" ? story?.ps : story?.psEN || ""}
      </Typography>
    </>
  );
};

export default Template2;
