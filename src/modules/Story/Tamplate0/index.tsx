import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardMedia from "../../../components/CardMedia";
import "./index.css";
import logo from "../../../assets/images/PunchStories.png";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";
import { Template } from "../types";

const Template0 = ({ storyData }: Template) => {
  const [punchlinesIndex, setPunchlinesIndex] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (
        storyData?.punchLines &&
        punchlinesIndex + 1 < storyData?.punchLines?.length
      )
        setPunchlinesIndex(punchlinesIndex + 1);
      else setPunchlinesIndex(0);
    }, 9000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [punchlinesIndex]);

  const imageArray = () => {
    const newArray = [...storyData?.content2];
    newArray.shift();
    return newArray;
  };
  return (
    <Grid container style={{ width: "100vw" }}>
      <Grid
        item
        xs={12}
        sm={8}
        style={{ position: "relative", borderRight: "solid 1px black" }}
      >
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "50px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "50px",
            width: "50px",
            top: "50px",
            left: "50px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "100px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "100%",
            width: "1px",
            left: "50px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "100%",
            width: "1px",
            left: "100px",
          }}
        />

        <div
          style={{
            marginTop: "100px",
            marginLeft: "100px",
            borderLeft: "solid 1px black",
            borderTop: "solid 1px black",
          }}
        >
          <CardMedia image={storyData?.content2[0]} height='700px' />
        </div>
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "800px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "900px",
          }}
        />
        <div
          style={{
            marginLeft: "100px",
            height: "100px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={800} fontSize='50px'>
            {storyData?.name}
          </Typography>
        </div>
        <div
          style={{
            marginLeft: "100px",

            padding: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className='text' fontSize='20px'>
            {storyData?.resume}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "50px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "100px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "100%",
            width: "1px",
            right: "50px",
          }}
        />

        <div
          className='rightBox'
          style={{
            marginTop: "100px",
            height: "700px",
            borderTop: "solid 1px black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px",
          }}
        >
          {storyData?.punchLines && (
            <Typography fontSize='80px' fontWeight={800} textAlign='center'>
              "{storyData?.punchLines[punchlinesIndex]}"
            </Typography>
          )}
        </div>
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "800px",
          }}
        />
        <Box
          style={{
            position: "absolute",
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            top: "900px",
          }}
        />
        <div
          onClick={() => navigate(ROUTE_PATHS.HOME)}
          style={{
            cursor: "pointer",
            marginRight: "45px",
            height: "100px",
            width: "calc(33vw - 45px)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${logo})`,
            backgroundSize: "45%",
          }}
        ></div>
        <div
          style={{
            marginRight: "45px",
            height: "100%",
            width: "calc(33vw - 45px)",
          }}
        >
          {imageArray().map((item, pos) => {
            return (
              <div key={pos}>
                <CardMedia image={item} />
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Template0;
