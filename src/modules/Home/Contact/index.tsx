import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../slicer/types";
import { ROUTE_PATHS } from "../../../constants/routes";
import { scrollTo } from "../../../slicer/general/general.actions";
import { useMediaQuery, useTheme } from "@mui/material";

const Contact = () => {

  const contactsRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch()
  const scrollToL = useSelector<State, string>(
    (state) => state.general.scrollTo
  );
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleScrollToContacts = () => {
    if (null !== contactsRef.current) {
      window.scrollTo({
        top: contactsRef.current.offsetTop - (mobile ? 70 : 100),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollToL === ROUTE_PATHS.CONTACT) {
      handleScrollToContacts();
      dispatch(scrollTo(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToL]);

  return (
    <div ref={contactsRef} style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
    </div>
  )
}

export default Contact