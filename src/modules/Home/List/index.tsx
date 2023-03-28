import { CardMedia as Image } from "@mui/material";
import { Grid, Container, Typography } from "@mui/material";
import logo from "../../../assets/images/PunchStories.png";
import Button from "../../../components/Buttons/Button";
import { BiAnalyse } from "react-icons/bi";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Book } from "../../../slicer/books/books.types";
import { useEffect } from "react";
import { fetchBooks } from "../../../slicer/books/books.actions";
import Element from "./Element";
import Loader from "../../../components/Loader";

interface Props {
  mobile: boolean;
}

const List = ({ mobile }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stories = useSelector<State, Book[]>(
    (state) => state.books.books.data || []
  );
  const loading = useSelector<State, boolean>(
    (state) => state.general.loading
  );

  useEffect(() => {
    const filters = {
      onlyActive: true,
    };
    dispatch(fetchBooks(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ height: "40vh" }}><Loader /></div>
      ) : (
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
            height='150px'
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
          <Typography fontSize='20px' mt='-20px'>
            by: <b>Teresa Sá</b>
          </Typography>
          <Grid
            container
            columnSpacing={5}
            rowSpacing={5}
            justifyContent='center'
            mt='50px'
          >
            {stories.map((item, pos) => {
              return <Element item={item} pos={pos} mobile={mobile} />;
            })}
          </Grid>
          <div style={{ marginTop: "50px" }}>
            <Button
              label='Load More'
              onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            >
              <BiAnalyse size='1.5em' color='white' />
            </Button>
          </div>
        </Container>
      )}
    </>
  );
};

export default List;
