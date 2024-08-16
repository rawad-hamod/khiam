import React from "react";

import { Paper, Button, Typography, Box } from "@mui/material";

import saveTimeMoney from "../../assests/slider-images/save-time-money.jpg";


import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero(props) {
  const {t}= useTranslation();
  const {heroTitle,heroDetails,heroButton}=t("hero")
  return (
    <Paper
      sx={{
        width: "100%",
        height: "80vh",
        margin: "0",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        gap: "20px",
        justifyContent: "center",
        padding: "5rem",
        position: "relative",
        "&::before": {
          position: "absolute",
          backgroundImage:`url(${saveTimeMoney})` ,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          content: '""',
          inset: "0",
          opacity: "0.5",
        },
      }}
    >
      <Box
        sx={{
          isolation: "isolate",
          color: "#fff",
        textAlign:"center",
          width: {
            xs: "100%",
            md: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            justifyContent:"space-between",
            gap:"40px"
          },
        }}
      >
        <Typography variant="h2" sx={{backgroundColor:"rgba(0,0,0,0.2)"}}>{heroTitle}</Typography>
        <Typography variant="h5">{heroDetails}</Typography>

        <Link to="/"><Button variant="contained" color="secondary" size="large" sx={{fontSize:"large"}}>{heroButton}</Button></Link>
      </Box>
    </Paper>
  );
}
