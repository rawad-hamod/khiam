import { useSelector } from "react-redux";
import { useState, useMemo, Fragment } from "react";
import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from "@mui/material/styles";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Consulting from "./pages/services/Consulting";
import "./App.css";

import { CssBaseline } from "@mui/material";
import { blueGrey, green, grey, orange,red } from "@mui/material/colors";
import Treatment from "./pages/services/Treatment";
import InitiahDignoisisAndTreatment from "./pages/services/initiahdignoisisandtreatment";
import FAQ from "./pages/info/faq";
import PoliticsAndPrivacy from "./pages/info/politicsandprivacy";
import ContactUs from "./pages/info/contactus";
import Footer from "./components/Footer";

import AskMedicalQuestion  from "./pages/AskMedicalQuestion";


const getDesignTokens = (mode) => ({
  palette: {
   
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blueGrey["A700"],
            
          },
          secondary: {
            main:orange[600],
          },

          divider: blueGrey["A700"],
          background: {
            default: blueGrey[50],
            section: blueGrey[100],
            paper: blueGrey[100],
          },
          text: {
            primary: blueGrey["A700"],
            secondary: grey[800],
            success: green[400],
            orange: orange,
          },
          components: {
            MuiInputBase: {
              styleOverrides: {
                input: {
                  color: "red",
                },
              },
            },
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: grey["A100"],
            
          },
          secondary: {
            main: orange[600],
          },
          divider: grey["A700"],
          background: {
            default: grey[900],
            section:grey[800],
            paper: grey[700],
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
            success: green[700],
            orange: orange[100],
          },
          components: {
            MuiTextField: {
              styleOverrides: {
                color: "#fff",
              },
            },
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
  // let x = createTheme();
  // x = responsiveFontSizes(x);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <ThemeProvider theme={x}> */}
            <Fragment>
              <ResponsiveAppBar />
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/ask-medical-question" element={<AskMedicalQuestion/>}/>
               
                
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
              <Footer />
            </Fragment>
          </ThemeProvider>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
