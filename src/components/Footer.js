import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Grid
      container
      sx={{ padding: "50px", backgroundColor: "#297EAA", marginTop: "3rem" ,color:"#fff"}}
      alignItems="center"
      justify="center"
      spacing={2}
    >
      <Grid
        Item
        xs={12}
        md={4}
        sx={{
          paddingTop: "20px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          JustifyContent: "center",
          gap: "2rem",
        }}
      >
        <Typography
          variant="h3"
          noWrap
          component="p"
          href="/"
          sx={{
            mr: 2,

            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "orange",
            textDecoration: "none",
          }}
        >
          Khiam
        </Typography>
        <Box>
          <Typography variant="h5" align="center">
            Follow us here:
          </Typography>
          <Box>
            <FontAwesomeIcon icon={faFacebook} className="socialMediaIcons" />
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="socialMediaIcons"
            />
            <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcons" />
          </Box>
        </Box>
      </Grid>
      <Grid
        Item
        xs={12}
        md={4}
        sx={{
          paddingTop: "20px",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          JustifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h5"> Important Links:</Typography>
        <List>
          <ListItem>
            <Link to="/aboutus"> About Khiam</Link>
          </ListItem>
          <ListItem>
            <Link to="/treatmentInSYR"> Treatment In Syria</Link>
          </ListItem>
          <ListItem>
            <Link to="/treatmentInSYR"> How can we help you</Link>
          </ListItem>
          <ListItem>
            <Link to="/politics&privacy">Politics & Privacy</Link>
          </ListItem>
          <ListItem>
            <Link to="/faq">FAQ</Link>
          </ListItem>
        </List>
      </Grid>
      <Grid
        Item
        xs={12}
        md={4}
        sx={{
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          JustifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h5"> Our services:</Typography>
        <List >
          <ListItem>
            <Link to="/consulting">Consulting</Link>
          </ListItem>
          <ListItem>
            <Link to="/initiahdignoisisandtreatmen">
              Diagnoises
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/treatment">Treatment</Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
