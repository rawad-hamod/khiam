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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
// redux -redux toolkit
import { useSelector, useDispatch } from "react-redux";

import { ButtonGroup, Divider } from "@mui/material";
import { asyncToggleTheme } from "../store/reducers/themeSlice";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ResponsiveAppBar() {
  // theme
  const theme = useTheme();
  // translation
  const { t, i18n } = useTranslation();
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
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <AppBar position="fixed" sx={{ height: "70px", top: "0" }}>
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
              color="inherit"
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
                <MenuItem onClick={handlCloseMMS}>{t("home")}</MenuItem>
              </Link>
              <Divider />
              <Box>
                <MenuItem
                  onClick={handleClickSMS}
                  aria-controls="SMS"
                  aria-haspopup="true"
                  aria-expanded={openSMS}
                  sx={{ fontWeight: "bold" }}
                >
                  {t("services")} <ArrowRightIcon />
                </MenuItem>
              </Box>
              <Divider />
              <Menu
                id="SMS"
                anchorEl={anchorElSMS}
                open={openSMS}
                onClose={handleCloseSMS}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Link to="/consulting">
                  <MenuItem onClick={handleCloseSMS}>
                    {t("consulting")}
                  </MenuItem>
                </Link>
                <Divider />

                <Link to="/initiahdignoisisandtreatment">
                  <MenuItem onClick={handleCloseSMS}>
                    {t("initial diagnoises and treatment")}
                  </MenuItem>
                </Link>
                <Divider />
                <Link to="/treatment">
                  <MenuItem onClick={handleCloseSMS}>{t("treatment")}</MenuItem>
                </Link>
              </Menu>
              <Link to="/politics&privacy">
                <MenuItem onClick={handlCloseMMS}>
                  {t("privacy & politics")}
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/faq">
                <MenuItem onClick={handlCloseMMS}>{t("FAQ")}</MenuItem>
              </Link>
              <Divider />
              <Link to="/contactus">
                <MenuItem onClick={handlCloseMMS}>{t("contact us")}</MenuItem>
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
              fontFamily: "monospace",
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Button
              onClick={() => {}}
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.secondary,
              }}
            >
              <Link to="/"> {t("home")}</Link>
            </Button>
            <Tooltip title="Open Services">
              <Button
                onClick={handleClickSML}
                aria-controls="sml"
                aria-haspopup="true"
                aria-expanded="true"
                sx={{ color: theme.palette.text.secondary }}
              >
                <Link>
                  {" "}
                  {t("services")} <ArrowDropDownIcon fontSize="small" />{" "}
                </Link>
              </Button>
            </Tooltip>

            {/* servicec menu in lg screen = SML */}
            <Menu
              id="sml"
              anchorEl={anchorElSML}
              open={openSML}
              onClose={handleCloseSML}
            >
              <Link to={"/consulting"}>
                <MenuItem onClick={handleCloseSML}>{t("consulting")}</MenuItem>
              </Link>
              <Divider />

              <Link to="/initiahdignoisisandtreatment">
                <MenuItem onClick={handleCloseSML}>
                  {t("initial diagnoises and treatment")}
                </MenuItem>
              </Link>
              <Divider />
              <Link to="/treatment">
                <MenuItem onClick={handleCloseSML}>{t("treatment")}</MenuItem>
              </Link>
            </Menu>
            <Button
              onClick={() => {}}
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.secondary,
              }}
            >
              <Link to="/politics&privacy">{t("privacy & politics")}</Link>
            </Button>

            <Button
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.secondary,
              }}
            >
              <Link to="/faq">{t("FAQ")}</Link>
            </Button>

            <Button
              onClick={() => {}}
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.secondary,
              }}
            >
              <Link to="/contactus">{t("contact us")}</Link>
            </Button>
          </Box>

          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button className="orangeButton" onClick={() => dispatch(asyncToggleTheme())}>
              {darkMode ? <BrightnessHighIcon /> : <Brightness3Icon />}
            </Button>
            <Button onClick={toggleLanguage} className="orangeButton">
              {" "}
              {i18n.language === "en" ? "العربية" : "English"}
            </Button>
            <Button className="orangeButton" >
              <Link to="/signup">{t("sign up")}</Link>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
