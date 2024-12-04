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
    <Box
      sx={{
       
        marginTop:"3rem",
        bottom: "0",
        right: "0",
        backgroundColor: "backGround.default",
 width:"100%",
        boxShadow: "7px 5px 5px 5px grey",
        position:"relative"
      }}
    >
      <Grid container  spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display:"flex",
            margin: "0rem auto",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
          }}
          
        >
          <Typography
            variant="h3"
            noWrap
            component="p"
            href="/"
            sx={{
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
         item
          
          xs={12}
          md={4}
       
            sx={{
              display:"flex",
              margin: "0rem auto",
              flexDirection:"column",
              alignItems:"center",
              justifyContent:"center"
            }}
            
        
         
        >
          <Typography variant="h5"> Important Links:</Typography>
          <List>
            <ListItem>
              <Link to="/home"> About Khiam</Link>
            </ListItem>
            <ListItem>
              <Link> Treatment In Syria</Link>
            </ListItem>
            <ListItem>
              <Link> How can we help you</Link>
            </ListItem>
            <ListItem>
              <Link>Politics & Privacy</Link>
            </ListItem>
            <ListItem>
              <Link>FAQ</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          
          xs={12}
          md={4}
          sx={{
            display:"flex",
            margin: "0rem auto",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
          }}
         
        >
          <Typography variant="h5"> Our services:</Typography>
          <List>
            <ListItem>
              <Link to="/consulting">Consulting</Link>
            </ListItem>
            <ListItem>
              <Link to="/initiahdignoisisandtreatmen">Diagnoises</Link>
            </ListItem>
            <ListItem>
              <Link to="/treatment">Treatment</Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
