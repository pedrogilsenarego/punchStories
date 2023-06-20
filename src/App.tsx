import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop";
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider, createTheme
} from "@mui/material";
import Snackbar from "./components/SnackBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./slicer/user/user.actions";
import { disableLoading } from "./slicer/general/general.actions";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    allVariants: {

      textTransform: 'none',
      fontSize: 16,
      caretColor: "transparent"
    },
  },
});


function App() {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(checkUserSession());
      dispatch(disableLoading())
    },
    // eslint-disable-next-line
    []
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <QueryClientProvider client={queryClient}>
            <Snackbar />
            <CssBaseline />
            <ScrollToTop />
            <AppRoutes />
          </QueryClientProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
