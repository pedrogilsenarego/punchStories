import { Grid, Container, Typography } from "@mui/material";
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
import { i18n } from "../../../translations/i18n";

interface Props {
  mobile: boolean;
}

const List = ({ mobile }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stories = useSelector<State, Book[]>(
    (state) => state?.books?.books?.data || []
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <Typography
              fontSize='70px'
              fontWeight={800}
              style={{ textAlign: "left", textTransform: "uppercase", letterSpacing: "5px", fontFamily: "spaceMono" }}
            >
              {i18n.t("modules.home.stories")}
            </Typography>

            <Typography fontSize='20px' mt='-20px'>
              by: <b>Teresa Sá</b>
            </Typography>
          </div>
          <div
            style={{ justifyContent: "center", width: "100%", rowGap: "10px", marginTop: "50px", display: "flex", flexDirection: "column" }}
          >
            {stories?.map((item: Book, pos: number) => {
              return <Element item={item} pos={pos} mobile={mobile} key={pos} />;
            })}
          </div>


          <div style={{ marginTop: "50px" }}>
            <Button
              label='Load More'
              onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default List;
