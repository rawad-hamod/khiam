import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box,Typography } from "@mui/material";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <Box
    fullWidth
      sx={{
        marginTop: "3rem",
        position: "static",
        bottom: "0",
        right: "0",
        backgroundColor: "backGround.default",
        width: "100%",
        boxShadow: "7px 5px 5px 5px grey",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"15px 10%"
      }}
    >
      <Typography
        variant="h5"
        
        
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
      <Box sx={{fontSize:"1rem"}}>
        <FontAwesomeIcon icon={faFacebook} className="socialMediaIcons" />
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className="socialMediaIcons"
        />
        <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcons" />
      </Box>
     
    </Box>
  );
}
