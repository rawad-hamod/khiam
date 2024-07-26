import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResponsiveAppBar from "./navbar/Header";
import Consulting from "./pages/services/Consulting";
import "./App.css";
import { CssBaseline } from "@mui/material";
import {
  blueGrey,
  lightBlue,
  red,
  yellow,
  green,
  grey,
  blue,
} from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blueGrey[400],
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
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/consulting" element={<Consulting/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
