import CardMedia from "../../../components/CardMedia";
import { CardMedia as Image } from "@mui/material"
import { Grid, Container, Typography } from "@mui/material";
import logo from "../../../assets/images/PunchStories.png"
import Button from "../../../components/Buttons/Button";
import { BiAnalyse } from "react-icons/bi";

interface Props {
  mobile: boolean
}

const List = ({ mobile }: Props) => {

  const images = [
    {
      mainImage:
        "https://www.indiewire.com/wp-content/uploads/2017/11/screen-shot-2017-11-16-at-1-08-00-pm.png?w=780",
      title: "Dark Hours",
    },
    {
      mainImage:
        "https://images.unsplash.com/photo-1476370648495-3533f64427a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8&w=1000&q=80",
      title: "A Skull to tomorrow",
    },
    {
      mainImage:
        "https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg",
      title: "The street where i was born",
    },
    {
      mainImage:
        "https://cdn.pixabay.com/photo/2018/03/13/02/43/eye-3221498__340.jpg",
      title: "Dark Hours",
    },
    {
      mainImage:
        "https://media.istockphoto.com/id/1306704388/photo/the-photographer.jpg?s=612x612&w=0&k=20&c=awoiSLOA22QtH_-4oC_sZphhExbANjc5t73JMM1NZ40=",
      title: "A Skull to tomorrow",
    },
    {
      mainImage:
        "https://www.manfrottoschoolofxcellence.com/wp-content/uploads/2017/09/20-sarah-and-olivers-4.jpg",
      title: "The street where i was born",
    },
  ];
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth={"xl"}
    >
      <Image
        component='img'
        height="150px"
        sx={{ objectFit: "contain" }}

        image={logo}
        style={{ cursor: "pointer" }}
        alt='logo'
      ></Image>
      <Typography
        fontSize='70px'
        fontWeight={800}
        style={{ textTransform: "uppercase", letterSpacing: "5px" }}
      >
        Portfolio
      </Typography>
      <Typography fontSize='20px' mt="-20px">
        by: <b>Teresa Sá</b>
      </Typography>
      <Grid container columnSpacing={5} rowSpacing={5} justifyContent='center' mt='50px'>
        {images.map((item, pos) => {
          return (
            <Grid item xs={mobile ? 12 : 4} key={pos}>
              <CardMedia image={item.mainImage} />
            </Grid>
          );
        })}
      </Grid>
      <div style={{ marginTop: "50px" }}>
        <Button label="Load More"  >
          <BiAnalyse size="1.5em" color="white" />
        </Button>
      </div>
    </Container >
  );
};

export default List;
