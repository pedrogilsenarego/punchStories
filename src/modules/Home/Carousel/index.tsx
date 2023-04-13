import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import { useState, useEffect } from "react";


const images = [
  {
    mainImage:
      "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
    punchLines: ["Dark Hours"],
    title: "Pedro Matias",
  },
  {
    mainImage:
      "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
    punchLines: ["A Skull to tomorrow"],
    title: "André Matias",
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

          backgroundColor: "black",
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
            <div style={{ width: "50%" }}>
              <Typography
                fontSize={"20px"}
                color='whitesmoke'
                style={{
                  fontFamily: "SpaceMono",
                  textTransform: "uppercase",
                  opacity: 0.5,
                }}
              >
                {images[index]?.title}
              </Typography>
              <Typography
                fontSize={"50px"}
                color='whitesmoke'
                style={{
                  fontFamily: "SpaceMono",
                  textTransform: "uppercase",
                  transition: "all 0.8s ease-out",
                  opacity: hover ? 1 : 0.5,
                }}
              >
                {images[index]?.punchLines[0]}
              </Typography>
            </div>
            <div
              className="vignette"
              style={{
                height: "80%",
                width: "50%",
                overflow: "hidden !important",
                display: "flex",
                alignItems: "center", // center along cross-axis
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    backgroundImage:
                      "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <img
                  height='100%'
                  width='100%'
                  src={images[index].mainImage}
                  alt=''
                  style={{ objectFit: "contain", filter: "grayscale(80%) contrast(150%)" }}
                />
              </div>
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
            return <Button pos={pos} setIndex={setIndex} index={index} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
