import { Box } from "@mui/material";
import "./index.css";
import { generalConstants } from "../../constants/general";
import { useState, useEffect } from "react";
import HackerLettering from "../HackerLettering";
import { fetchCarroussell } from "../../slicer/books/books.actions";
import { useDispatch, useSelector } from "react-redux";

const Collections = () => {
  const dispatch = useDispatch();
  const [finalized, setFinalized] = useState(false);

  useEffect(() => {
    dispatch(fetchCarroussell());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carroussell = useSelector((state) => state.books.carroussell);

  useEffect(() => {
    setTimeout(() => {
      setFinalized(true);
    }, 1000);
  }, []);

  const handleOnDown = (track, e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = (track) => {
    track.dataset.mouseDownAt = "0" || 0;
    track.dataset.prevPercentage = track.dataset.percentage || 0;
  };

  const handleOnMove = (track, e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const prevPercentage = parseFloat(track.dataset.prevPercentage) || 0;
    const percentage = (mouseDelta / maxDelta) * -100 || 0;
    const nextPercentageUnconstrained = prevPercentage + percentage || 0;

    const nextPercentage =
      Math.max(Math.min(nextPercentageUnconstrained, 0), -100) || 0;
    if (isNaN(nextPercentage)) return;

    track.dataset.percentage = nextPercentage || 0;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 4000, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    const track = document.getElementById("image-track");

    window.addEventListener("mousedown", (e) => handleOnDown(track, e));
    window.addEventListener("touchstart", (e) =>
      handleOnDown(track, e.touches[0])
    );
    window.addEventListener("mouseup", () => handleOnUp(track));
    window.addEventListener("touchend", () => handleOnUp(track));
    window.addEventListener("mousemove", (e) => handleOnMove(track, e));
    window.addEventListener("touchmove", (e) =>
      handleOnMove(track, e.touches[0])
    );

    return () => {
      window.removeEventListener("mousedown", (e) => handleOnDown(track, e));
      window.removeEventListener("touchstart", (e) =>
        handleOnDown(track, e.touches[0])
      );
      window.removeEventListener("mouseup", () => handleOnUp(track));
      window.removeEventListener("touchend", () => handleOnUp(track));
      window.removeEventListener("mousemove", (e) => handleOnMove(track, e));
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(track, e.touches[0])
      );
    };
  }, []);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          width: "100vw",
          height: "100vh",
          paddingLeft: generalConstants.PADDING,
          paddingRight: generalConstants.PADDING,
        }}
      >
        <Box
          width='100%'
          height='80vh'
          style={{
            cursor: "pointer",
            position: "relative",
            opacity: finalized ? 1 : 0,
            transform: finalized
              ? "scale(1) translate(0%, 0%) "
              : " scale(0.3) translate(-2000px, -1000px) perspective(800px) rotateX(50deg)",
            overflow: "hidden",
            transition: "all 0.6s ease-out",
          }}
        >
          <div style={{ position: "absolute", bottom: 0, right: 0 }}>
            <HackerLettering />
          </div>
          <Box id='image-track'>
            {carroussell.map((item, pos) => {
              const signal = pos % 2 ? -1 : 1;
              return (
                <img
                  key={pos}
                  style={{
                    transform: finalized
                      ? "translate(0px, 0px)"
                      : `translate(0px,${signal * 40}px)`,
                  }}
                  className='image'
                  draggable={false}
                  src={item}
                  alt=''
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Collections;
