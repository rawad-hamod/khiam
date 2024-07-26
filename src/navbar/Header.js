import { useState } from "react";
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

function ResponsiveAppBar() {
  // theme
  const theme = useTheme();
  

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
  return (
    <AppBar position="fixed" mb={5}>
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
              <MenuItem onClick={handlCloseMMS}><Link to="/"> Home</Link></MenuItem>
              <Divider />
              <Box>
                <MenuItem
                  onClick={handleClickSMS}
                  aria-controls="SMS"
                  aria-haspopup="true"
                  aria-expanded={openSMS}
                >
                  Services <ArrowRightIcon />
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
                <MenuItem onClick={handleCloseSMS}><Link to="/consulting">consulting</Link></MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseSMS}>
                  Initial diagnoises and treatment
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseSMS}>Treatment</MenuItem>
              </Menu>

              <MenuItem onClick={handlCloseMMS}>Privacy & Politics</MenuItem>
              <Divider />
              <MenuItem onClick={handlCloseMMS}>FAQ</MenuItem>
              <Divider />
              <MenuItem onClick={handlCloseMMS}>Contact Us</MenuItem>
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
            href="#app-bar-with-responsive-menu"
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
                color: theme.palette.text.primary,
              }}
            >
             <Link to="/"> Home</Link>
            </Button>
            <Tooltip title="Open Services">
              <Button
                onClick={handleClickSML}
                aria-controls="sml"
                aria-haspopup="true"
                aria-expanded="true"
                sx={{
                  my: 2,
                  display: "block",
                  color: theme.palette.text.primary,
                }}
              >
                Services <ArrowDropDownIcon fontSize="small" />
              </Button>
            </Tooltip>

            {/* servicec menu in lg screen = SML */}
            <Menu
              id="sml"
              anchorEl={anchorElSML}
              open={openSML}
              onClose={handleCloseSML}
            >
              <MenuItem onClick={handleCloseSML}><Link to={"/consulting"}>Consulting</Link></MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseSML}>
                Initial diagnoises and treatment
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseSML}>Treatment</MenuItem>
            </Menu>
            <Button
              onClick={() => {}}
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.primary,
              }}
            >
              Privacy & Politics
            </Button>

            <Button
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.primary,
              }}
            >
              FAQ
            </Button>

            <Button
              onClick={() => {}}
              sx={{
                my: 2,
                display: "block",
                color: theme.palette.text.primary,
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box></Box>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={() => dispatch(asyncToggleTheme())}>
              {darkMode ? <BrightnessHighIcon /> : <Brightness3Icon />}
            </Button>
            <Button>العربية</Button>
            <Button><Link to="/signup">Sign Up</Link></Button>
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
