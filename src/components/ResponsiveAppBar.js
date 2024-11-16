import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
// redux -redux toolkit
import { useSelector, useDispatch } from "react-redux";

import { ButtonGroup, Divider } from "@mui/material";
import { asyncToggleTheme } from "../store/reducers/themeSlice";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ResponsiveAppBar() {
 
  // translation
  const { t, i18n } = useTranslation();
  const {
    home,
    dentistry,
    medicine,
    comestic,
    askAmedicalQuestion,
    contactUs,
    FAQ,
    privacyPolicy,
    treatmentRequest,
  } = t("navbar");
  // toggle language
  const toggleLanguage = () => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
  };

  // redux dark mode
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode);
  // main menu in small devices =MMS
  const [anchorElMMS, setAnchorElMMS] = useState(null);
  const handleClickMMS = (e) => {
    setAnchorElMMS(e.currentTarget);
  };
  const openMMS = Boolean(anchorElMMS);
  const handlCloseMMS = () => {
    setAnchorElMMS(null);
  };
  // services menu large screen =sml
  const [anchorElSML, setAnchorElSML] = useState(null);
  const handleClickSML = (e) => {
    setAnchorElSML(e.currentTarget);
  };
  const openSML = Boolean(anchorElSML);
  const handleCloseSML = () => {
    setAnchorElSML(null);
  };
  // services menu small devices= SMS
  const [anchorElSMS, setAnchorElSMS] = useState(null);

  const handleClickSMS = (e) => {
    setAnchorElSMS(e.currentTarget);
  };
  const openSMS = Boolean(anchorElSMS);
  const handleCloseSMS = () => {
    setAnchorElSMS(null);
    setAnchorElMMS(null);
  };
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.body.dir = dir;
    // localStorage.setItem("i18nextLng",JSON.stringify(i18n.language))
  }, [i18n, i18n.language]);
  return (
    <AppBar position="fixed" sx={{ height: "70px", top: "0",backgroundColor:"background.default" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* the menu icon  */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-controls="main menu-sm"
              aria-haspopup="true"
              aria-expanded={openMMS}
              onClick={handleClickMMS}
              
            >
              <MenuIcon />
            </IconButton>
            {/*main menu in small devices= MMS */}
            <Menu
              id="main menu-sm"
              anchorEl={anchorElMMS}
              open={openMMS}
              onClose={handlCloseMMS}
            >
              <Link to="/">
                <MenuItem onClick={handlCloseMMS}>{home}</MenuItem>
              </Link>
              <Divider />
              <Link to="/ask-medical-question">
                <MenuItem onClick={handlCloseMMS}>{askAmedicalQuestion}</MenuItem>
              </Link>
              <Divider />
              
                <MenuItem
                  onClick={handleClickSMS}
                  aria-controls="SMS"
                  aria-haspopup="true"
                  aria-expanded={openSMS}
                  sx={{ fontWeight: "bold", letterSpacing: "0px" }}
                >
                  <Link>
                  {treatmentRequest}{" "}
                  {document.body.dir === "ltr" ? (
                    <ArrowRightIcon sx={{ margin: "0px" }} />
                  ) : (
                    <ArrowLeftIcon sx={{ margin: "0px" }} />
                  )}
                  </Link>
                </MenuItem>
             
              <Divider />
              <Menu
                id="SMS"
                anchorEl={anchorElSMS}
                open={openSMS}
                onClose={handleCloseSMS}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: document.body.dir === "ltr" ? "left" : "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: document.body.dir === "ltr" ? "left" : "right",
                }}
              >
                <Link to="/dentistry">
                  <MenuItem onClick={handleCloseSMS}>{dentistry}</MenuItem>
                </Link>
                <Divider />

                <Link to="/medicine">
                  <MenuItem onClick={handleCloseSMS}>{medicine}</MenuItem>
                </Link>
                <Divider />
                <Link to="/comestic">
                  <MenuItem onClick={handleCloseSMS}>{comestic}</MenuItem>
                </Link>
              </Menu>
              <Link to="/politicsprivacy">
                <MenuItem onClick={handlCloseMMS}>
                  {privacyPolicy}
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/faq">
                <MenuItem onClick={handlCloseMMS}>{FAQ}</MenuItem>
              </Link>
              <Divider />
              <Link to="/contactus">
                <MenuItem onClick={handlCloseMMS}>{contactUs}</MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="p"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "orange",
              textDecoration: "none",
            }}
          >
            Khiam
          </Typography>

          <Typography
            color="secondary"
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "orange",
              textDecoration: "none",
            }}
          >
            Khiam
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              
            }}
          >
            <Link to="/">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  display: "block",
                  
                }}
              >
                {home}
              </Button>
            </Link>
            <Link to="/ask-medical-question">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  display: "block",
                 
                  
                }}
              >
                {askAmedicalQuestion}
              </Button>
            </Link>
            {/* <Tooltip title="Open Services"> */}
            <Link>
              <Button
                onClick={handleClickSML}
                aria-controls="sml"
                aria-haspopup="true"
                aria-expanded="true"
                sx={{
                  my: 1.75,
                  display: "block",
                 
                }}
              >
                {" "}
                {treatmentRequest}
                <ArrowDropDownIcon fontSize="small" />{" "}
              </Button>
            </Link>
            {/* </Tooltip> */}

            {/* servicec menu in lg screen = SML */}
            <Menu
              id="sml"
              anchorEl={anchorElSML}
              open={openSML}
              onClose={handleCloseSML}
            >
              <Link to={"/dentistry"}>
                <MenuItem onClick={handleCloseSML}>{dentistry}</MenuItem>
              </Link>
              <Divider />

              <Link to="/medicine">
                <MenuItem onClick={handleCloseSML}>{medicine}</MenuItem>
              </Link>
              <Divider />
              <Link to="comestic">
                <MenuItem onClick={handleCloseSML}>{comestic}</MenuItem>
              </Link>
            </Menu>
            <Link to="/privacypolicy">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  display: "block",
                 
                }}
              >
                {privacyPolicy}
              </Button>
            </Link>
            <Link to="/faq">
              <Button
                sx={{
                  my: 2,
                  display: "block",
                
                }}
              >
                {FAQ}
              </Button>
            </Link>

            <Link to="/contactus">
              <Button
                onClick={() => {}}
                sx={{
                  my: 2,
                  display: "block",
                  
                }}
              >
                {contactUs}
              </Button>
            </Link>
          </Box>

          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            spacing={2}
          >
            <Button
              color="secondary"
              onClick={() => dispatch(asyncToggleTheme())}
            >
              {darkMode ? <BrightnessHighIcon /> : <Brightness3Icon />}
            </Button>
            <Button onClick={toggleLanguage} color="secondary">
              {" "}
              {i18n.language === "en" ? "العربية" : "English"}
            </Button>
            <Button color="secondary">
              <Link to="/signup">{t("sign up")}</Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
