import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import Button2 from "../../../components/Buttons/Button";
import { useState, useEffect } from "react";
import "./index.css"

const images = [
  {
    mainImage:
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
    punchLines: ["Dark Hours"],
    title: "Pedro Matias",
    resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
    punchLines: ["A Skull to tomorrow"],
    title: "André Matias",
    resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  },
];

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index + 1 < images.length) setIndex(index + 1);
      else setIndex(0);
    }, 7000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: window.innerWidth,

          backgroundColor: "#131212",
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
                {images[index]?.title}
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
                "{images[index]?.resume}
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
                "{images[index]?.punchLines[0]}"
              </Typography>
              <Button2
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
                src={images[index].mainImage}
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
          {images.map((item, pos) => {
            return <Button pos={pos} setIndex={setIndex} index={index} key={pos} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
