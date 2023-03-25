import { Box, Typography, Grid } from "@mui/material";
import CardMedia from "../../../components/CardMedia";
import "./index.css";
import logo from "../../../assets/images/PunchStories.png";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../constants/routes";

const Template0 = () => {
  const navigate = useNavigate()
  const story = {
    title: "Sara Freitas",
    images: [
      "https://static.boredpanda.com/blog/wp-content/uploads/2015/07/Only-18-years-old-girl-creates-interesting-photos5__880.jpg",
      "https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg",
    ],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    punchLines: ["A men needs his watch"],
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
          <Typography fontWeight={800} fontSize='30px'>
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
          <Typography className="text" fontSize='20px'>{story?.text}</Typography>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} >
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
            backgroundColor: "red",
            borderTop: "solid 1px black",
          }}
        ></div>
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
      </Grid>
    </Grid>
  );
};

export default Template0;
