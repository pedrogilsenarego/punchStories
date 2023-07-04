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
  const divRef= useRef<HTMLDivElement>(null);
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

   useEffect(() => {
    if (typographyRef.current && imgRef.current) {
      const textHeight = typographyRef.current.offsetHeight;
       setHoleOnTextHeigh(textHeight);
       imgRef.current.style.height = `${textHeight}px`;
     }
   }, [typographyRef]);

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
        const middleWordIndex = Math.floor(words.length / 2-20);
        imgElem.src = "data:image/png;base64,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";
        imgElem.alt = "example";
        imgElem.style.display = "inline";
        imgElem.style.opacity = "0%";
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
            #{story?.postNumber}_{story?.name}
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
                
                height: `${holeOnTextHeigh}px`,
              
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
              >
                {lang === "PT" ? story?.resume?.[0] : story?.resumeEN?.[0]}
              </Typography>
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
              <Typography style={{ fontFamily: "spaceMono" }} dangerouslySetInnerHTML={{
                __html: lang === "PT"
                  ? story?.resume?.substring(1)
                  : story?.resumeEN?.substring(1),
              }} />
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
                  dangerouslySetInnerHTML={{
                    __html: textSegmentsMobile[index].segment
                  }}
                />
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
