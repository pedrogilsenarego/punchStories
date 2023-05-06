import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTE_PATHS } from "../../../../constants/routes";
import { Book } from "../../../../slicer/books/books.types";
import CardMedia from "../../../../components/CardMedia";
import { useState } from "react";
interface Props {
  mobile: boolean;
  pos: number;
  item: Book;
}

const Element = ({ mobile, pos, item }: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate();
  if (!item) return <></>
  return (
    <>
      <Grid
        justifyContent='center'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        item
        xs={mobile ? 12 : 4}
        key={pos}
        onClick={() =>
          navigate(ROUTE_PATHS.STORY.replace(":id", item?.documentID) || "")
        }
      >
        <CardMedia image={item?.content2[0] || ""} height='500px' />

        <Box display='flex' justifyContent='center' width='100%' mt='1px'>
          <Typography fontSize='1.5rem' style={{
            opacity: hover ? 1 : 0,
            transition: "opacity 0.6s ease-in-out"
          }}>
            {item?.title}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Element;
