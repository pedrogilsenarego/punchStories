import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardMedia from "../../../components/CardMedia";
import "./index.css";
import logo from "../../../assets/images/PunchStories.png";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";

const Template0 = () => {
  const [punchlinesIndex, setPunchlinesIndex] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (punchlinesIndex + 1 < story?.punchLines.length)
        setPunchlinesIndex(punchlinesIndex + 1);
      else setPunchlinesIndex(0);
    }, 9000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [punchlinesIndex]);

  const story = {
    title: "Sara Freitas",
    punchLines: [
      "The men who live under the bridge",
      "The never returning dragon",
      "Miss you that night",
    ],
    images: [
      "https://static.boredpanda.com/blog/wp-content/uploads/2015/07/Only-18-years-old-girl-creates-interesting-photos5__880.jpg",
      "https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg",
      "https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg?cs=srgb&dl=pexels-jack-hawley-57905.jpg&fm=jpg",
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2014/06/how-to-see-black-and-white-01.jpg?w=600&h=1260&ssl=1"
    ],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  const imageArray = () => {
    const newArray = [...story?.images]
    newArray.shift()
    return newArray
  }
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
          <CardMedia image={story?.images[0]} height='700px' />
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
            {story?.title}
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
            {story?.text}
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
          <Typography fontSize='80px' fontWeight={800} textAlign='center'>
            "{story?.punchLines[punchlinesIndex]}"
          </Typography>
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
              <div key={pos} >
                <CardMedia image={item} />
              </div>
            )
          })}

        </div>
      </Grid>
    </Grid>
  );
};

export default Template0;
