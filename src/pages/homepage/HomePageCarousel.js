import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import dental1 from "../../assests/slider-images/dental1.png";
import dentist from "../../assests/slider-images/dentist.png";
import doctoricon from "../../assests/slider-images/doctoricon.png";
import umbrella from "../../assests/slider-images/umbrella.jpg";
import question from "../../assests/slider-images/question.jpg";

export default function HomePageCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: dental1,
      button: "apply your consult now",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: doctoricon,
      button: "apply your consult now",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: dentist,
      button: "apply your consult now",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: umbrella,
      button: "apply your consult now",
    },
    {
      name: "Contact Us",
      description: "we will answer any question you need",
      image: question,
      button: "apply your consult now",
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
        height: "100vh",
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
        <Typography variant="h2">{props.item.name}</Typography>
        <Typography variant="h4">{props.item.description}</Typography>

        <Button variant="contained">{props.item.button}</Button>
      </Box>
    </Paper>
  );
}
