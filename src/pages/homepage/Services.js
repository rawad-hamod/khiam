import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Tab,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TurnedInNotTwoToneIcon from "@mui/icons-material/TurnedInNotTwoTone";
import signUpImage from "../../assests/steps/signUp.png";
import navMenu from "../../assests/steps/navMenu.jpg";
import fillTheForm from "../../assests/steps/fillTheform.jpg";
import { Link } from "react-router-dom";


export default function Services() {
  const { t } = useTranslation();
  const { step1, step2, step3, step4, title, introduction, tab1, tab2 } =
    t("servicespage");
  const {
    service1Introduction,
    service2Introduction,
    advantegesTitle,
    adv11,
    adv12,
    adv13,
    adv14,
    adv15,
    adv16,
    adv21,
    adv22,
    adv23,
    getService,
    getServiceIntroduction
  } = t("serviceDetail");
  const{step1Title,step1Description,step1Button,step2Title,step2Description,step2Button,step3Title,step3Description,step4Title,step4Description,step4Button}=t("askMedicalQuestionSteps")
  // theme
  const theme = useTheme();
  // tabs
  const [value, setValue] = useState("0");
  const [stepValue, setStepValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleStepChange = (event, newStepValue) => {
    setStepValue(newStepValue);
  };
  // services
  const details = [
    {
      value: "0",
      introduction: service1Introduction,

      advanteges: [adv11, adv12, adv13, adv14, adv15, adv16],
    },
    {
      value: "1",
      introduction: service2Introduction,
      advanteges: [adv21, adv22, adv23],
    },
  ];
  // steps in card details
  const askAmedicalQuestionCardDetail = [
    {
      value: "0",
      image: signUpImage,
      alt: "sign up",
      step:step1Title ,
      details:
      step1Description ,
      buttonContent: step1Button,
      link:"signup"
    },
    {
      value: "1",
      image: navMenu,
      alt: "nav menu",
      step:step2Title ,
      details:
       step2Description ,
      buttonContent:step2Button ,
      link:"ask-medical-question"
    },
    {
      value: "2",
      image: fillTheForm,
      alt: "fill the form",
      step: step3Title ,
      details:
        step3Description,
      buttonContent: step2Button,
      link:"ask-medical-question"
    },
    {
      value: "3",
      image: fillTheForm,
      alt: "fill the form",
      step:step4Title ,
      details:
      step4Description ,
      buttonContent: step4Button,
      link:"ask-medical-question"
    },
  ];

  function ServiceDetails({ item }) {
    return (
      <>
        <TabPanel value={item.value}>
          <Typography
            variant="h6"
            maxWidth="sm"
            sx={{ margin: "1.5rem auto", textAlign: "justify" }}
          >
            {item.introduction}
          </Typography>
          <Typography
            variant="h6"
            maxWidth="sm"
            sx={{
              margin: "1.5rem auto",
              textAlign: "justify",
              textDecoration: "underline",
            }}
          >
            {advantegesTitle}
          </Typography>
          <Box>
            <Card>
              <List>
                {item.advanteges.map((advantage, index) => {
                  return (
                    <ListItem key={index}>
                      <TurnedInNotTwoToneIcon
                        color="secondary"
                        sx={{ margin: "0rem 1rem" }}
                      />

                      <Typography variant="h6">{advantage}</Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </Box>
        </TabPanel>
      </>
    );
  };
  function StepCard({ card }) {
    return (
      <TabPanel value={card.value}>
        <Card
          sx={{ width: { xs: "400px" }, height: { xs: "400px" }, padding: "5px", margin:"1rem auto" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              size="small"
              image={card.image}
              alt={card.alt}
              sx={{ objectFit: "fill", width: "400px", height: "200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.step}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.details}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
              <Link to={`${card.link}`}  sx={{margin:"1px auto"}}>
            <Button variant="containd" size="small" sx={{backgroundColor: theme.palette.secondary.main, margin:"1px auto"}} >
              {card.buttonContent}
            </Button>
            </Link>
          </CardActions>
        </Card>
      </TabPanel>
    );
  }
  
  return (
    <Box
      sx={{
        margin: "0",
        minWidth: "100%",
        backgroundColor: "background.section",
      }}
      pt={2}
    >
      <Box
        spacing={2}
        className="centerFlexColumn"
        sx={{
          maxWidth: { xs: "90%", md: "60%" },
          margin: "20px auto",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="h6"
          maxWidth="sm"
          sx={{ margin: "1.5rem auto", textAlign: "justify" }}
        >
          {introduction}
        </Typography>
        <Box
          className="centerFlexColumnn"
          sx={{ margin: "10px auto", padding: "10px" }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box className="centerFlexRow">
                <TabList
                  justify="center"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label={tab1}
                    value="0"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                    }}
                  />
                  <Tab
                    label={tab2}
                    value="1"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                    }}
                  />
                </TabList>
              </Box>

              {details.map((item) => {
                return <ServiceDetails item={item} />;
              })}
            </TabContext>
          </Box>
        </Box>
        <Typography variant="h4">{getService}</Typography>
        <Typography
          variant="h6"
          maxWidth="sm"
          sx={{ margin: "1.5rem auto", textAlign: "justify" }}
        >
          {getServiceIntroduction}
        </Typography>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={stepValue} centered>
            <Box className="centerFlexRow">
              <TabList
              justify="center"
                onChange={handleStepChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label={step1}
                  value="0"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                    fontWeight: "bold",}}
                />
                <Tab
                  label={step2}
                  value="1"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                    fontWeight: "bold",}}
                />
                <Tab
                  label={step3}
                  value="2"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                    fontWeight: "bold",}}
                />
                <Tab
                  label={step4}
                  value="3"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "1.2rem",
                    fontWeight: "bold",}}
                />
              </TabList>
            </Box>
            {askAmedicalQuestionCardDetail.map((card, i) => {
              return <StepCard card={card} key={i} sx={{margin:"1rem auto"}} />;
            })}
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
}
