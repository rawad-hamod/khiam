import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import medicalTourism from "../../assests/slider-images/medical-tourism.jpg";
import supportTeam from "../../assests/slider-images/support-team.jpg";
import dentist from "../../assests/slider-images/dentist.png";
import syria from "../../assests/slider-images/syria.jpg";
import saveTimeMoney from "../../assests/slider-images/save-time-money.jpg";
import question from "../../assests/slider-images/question.jpg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomePageCarousel(props) {
  // translation
  const {t} = useTranslation();
  var items = [
    {
      title:t("Have you ever thought about medical tourism?"),
      image: medicalTourism,
      buttonDisplay:"none",
    },{
      title:t("Do you need an integrated support team to answer all your inquiries and develop your treatment plans?"),
      image: supportTeam,
      buttonDisplay:"none",
    },
    {
      title:t("Have you had a specific medical diagnosis for your teeth and you need to come to Syria and receive treatment?"),
      image: dentist,
      buttonDisplay:"none",
    },{
      title:t("Do you have an idea about the advantages of dentistry in Syria?"),
      image: syria,
      buttonDisplay:"none",
    }
    ,{
      title:t("save your time and your money"),
      image: saveTimeMoney,
      buttonDisplay:"none",
    },
    
    
    {
      
     title: "we will answer any question you need",
      image: question,
      buttonDisplay:"block",
      buttonText: t("contact us"),
      link:"/contactus"
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible
      animation="slide"
      stopAutoPlayOnHover={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
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
          backgroundImage: `url(${props.item.image})`,
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
        <Typography variant="h2" sx={{backgroundColor:"rgba(0,0,0,0.2)"}}>{props.item.title}</Typography>
        <Typography variant="h4">{props.item.description}</Typography>

        <Link to={props.item.link}><Button variant="contained" sx={{display:props.item.buttonDisplay}}>{props.item.buttonText}</Button></Link>
      </Box>
    </Paper>
  );
}
