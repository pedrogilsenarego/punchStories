import { Container, Typography } from "@mui/material";
import { ROUTE_PATHS } from "../../../constants/routes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { Book } from "../../../slicer/books/books.types";
import { useEffect, useRef } from "react";
import { fetchBooks } from "../../../slicer/books/books.actions";
import Element from "./Element";
import Loader from "../../../components/Loader";
import { i18n } from "../../../translations/i18n";
import { scrollTo } from "../../../slicer/general/general.actions";

interface Props {
  mobile: boolean;
}

const List = ({ mobile }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stories = useSelector<State, Book[]>(
    (state) => state?.books?.books?.data || []
  );
  const loading = useSelector<State, boolean>((state) => state.general.loading);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToL = useSelector<State>((state) => state.general.scrollTo);

  const handleScrollToList = () => {
    if (null !== listRef.current) {
      window.scrollTo({
        top: listRef.current.offsetTop - (mobile ? 70 : 100),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollToL === ROUTE_PATHS.BOOKS) {
      handleScrollToList();
      dispatch(scrollTo(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);

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
        <div style={{ height: "40vh" }}>
          <Loader />
        </div>
      ) : (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: stories?.length === 1 ? "center" : "start",

            minHeight: "100vh",
          }}
          maxWidth={"xl"}
        >
          <div
            ref={listRef}
            style={{
              display: "flex",
              justifyContent: "space-between",

              width: "100%",
            }}
          >
            <Typography
              fontSize={mobile ? "20px" : "40px"}
              fontWeight={800}
              style={{
                textAlign: "left",
                textTransform: "uppercase",
                letterSpacing: "5px",
                fontFamily: "spaceMono",
              }}
            >
              {i18n.t("modules.home.stories")}
            </Typography>
          </div>
          <div
            style={{
              paddingTop: "30vh",
              marginBottom: "-30vh",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography style={{ fontSize: "80px", fontFamily: "spaceMono" }}>
              {i18n.t("modules.home.comingSoon")}
            </Typography>
            <Typography style={{ fontSize: "20px", fontFamily: "spaceMono" }}>
              {i18n.t("modules.home.comingSoonS")}
            </Typography>
          </div>
          {/* <div
            style={{
              justifyContent: "center",
              width: "100%",
              rowGap: "10px",
              marginTop: mobile ? "0px" : "50px",
              display: "flex",
              flexDirection: "column",

            }}
          >
            {stories?.map((item: Book, pos: number) => {
              return (
                <Element item={item} pos={pos} mobile={mobile} key={pos} />
              );
            })}
          </div> */}

          {/* <div style={{ marginTop: "50px" }}>
            <Button
              label='Load More'
              onClick={() => navigate(ROUTE_PATHS.ADMIN)}
            />
          </div> */}
        </Container>
      )}
    </>
  );
};

export default List;
