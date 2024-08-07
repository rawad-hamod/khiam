import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import perfectUx from "../../assests/medicaltourismSYR/perfect-ux.jpg";
import precessionInTiming from "../../assests/medicaltourismSYR/Precession in timing.jpg";
import qualified from "../../assests/medicaltourismSYR/qualified.jpg";
import reliability from "../../assests/medicaltourismSYR/imgreliability.jpg";
import satisfyingResults from "../../assests/medicaltourismSYR/satisfying-results.jpg";
import saveMoney from "../../assests/medicaltourismSYR/save-money.jpg";
import saveTime from "../../assests/medicaltourismSYR/save-time.jpg";
import SkilledDoctors from "../../assests/medicaltourismSYR/Skilled doctors.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Typography, Box } from "@mui/material";

// translation

function Avatar1(props) {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding:"10px",
        margin:"5px"
        
      }}
    >
      <Box
        variant="circular"
        sx={{
          width: '300px',
          height: '300px',
          border: "solid grey 1px 1px",
          borderRadius: "10px",
          margin:{xs:"10px auto"} ,
          backgroundImage: `url(${props.item.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      <Typography
        variant="body1"
        sx={{ textAlign: "center", margin: "0 auto",width:"100%"}}
      >
        {props.item.text}
      </Typography>
    </div>
  );
}

function Quality() {
  // react slick image slider properties
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    centerMode:true,
    easing:"smooth",
    fullHeightOnHover:true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
     
    ],
  };
  // translation
  const { t } = useTranslation();
  const items = [
    {
      img: qualified,
      text: t("Professionalism"),
    },
    {
      img: reliability,
      text: t("Reliability"),
    },
    {
      img: SkilledDoctors,
      text: t("Skilled Doctors"),
    },
    {
      img: perfectUx,
      text: t("Perfect user experience"),
    },
    {
      img: satisfyingResults,
      text: t("Satisfying Results"),
    },
    {
      img: precessionInTiming,
      text: t("Precession In Timing"),
    },
    {
      img: saveMoney,
      text: t("Save Money"),
    },

    {
      img: saveTime,
      text: t("Save Time"),
    },
  ];

  return (
    <div className="slider-container" style={{ padding: "30px 0px" }}>
      <Slider {...settings}>
        {items.map((item, i) => {
          return <Avatar1 key={i} item={item} sx={{width:{xs:"40%",md:"20%"}}} />;
        })}
      </Slider>
    </div>
  );
}

export default Quality;
