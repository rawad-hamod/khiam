import { useSelector } from "react-redux";
import { useState, useMemo, Fragment } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ResponsiveAppBar from "./navbar/ResponsiveAppBar";
import Consulting from "./pages/services/Consulting";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { blueGrey, lightBlue, green, grey } from "@mui/material/colors";
import Treatment from "./pages/services/Treatment";
import InitiahDignoisisAndTreatment from "./pages/services/initiahdignoisisandtreatment";
import FAQ from "./pages/info/faq";
import PoliticsAndPrivacy from "./pages/info/politicsandprivacy";
import ContactUs from "./pages/info/contactus";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blueGrey[50],
          },
          divider: blueGrey["A700"],
          background: {
            default: green[50],
            paper: blueGrey[100],
          },
          text: {
            primary: grey["A700"],
            secondary: lightBlue[600],
            success: green[400],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#dbf4ff",
          },
          divider: grey["A700"],
          background: {
            default: "#000e21",
            paper: "#000e21",
          },
          text: {
            primary: "#fff",
            secondary: lightBlue[600],
            success: green[700],
          },
        }),
  },
});

function App() {
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Fragment>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route
                path="/initiahdignoisisandtreatment"
                element={<InitiahDignoisisAndTreatment />}
              />
              <Route path="/faq" element={<FAQ />} />
              <Route
                path="/politics&privacy"
                element={<PoliticsAndPrivacy />}
              />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </Fragment>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
