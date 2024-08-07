import { useState } from "react";
import { useTheme } from "@emotion/react";
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
const details = [
  {
    value: "0",
    introduction:
      " in online consulting we answer all your questions related to a medical condition, with out providing diagnoises or treatment, rest assured that all your information whether medical or personal are top secret",

    advanteges: [
      "A detailed answer to all your questions related to a medical condition.",
      "Clear information about your condition and illness.",
      "Explanatory information about your symptoms and how they relate to your disease.",
      "Ways and means of preventing complications as much as possible.",
      "Habits and methods to prevent the consequences of your illness as much as possible",
      "Improve the quality of your life and make it healthier",
    ],
  },
  {
    value: "1",
    introduction:
      " in online consulting we answer all your questions related to a medical condition, with out providing diagnoises or treatment, rest assured that all your information whether medical or personal are top secret",

    advanteges: [
      "A detailed answer to all your questions related to a medical condition.",
      "Clear information about your condition and illness.",
      "Explanatory information about your symptoms and how they relate to your disease.",
      "Ways and means of preventing complications as much as possible.",
      "Habits and methods to prevent the consequences of your illness as much as possible",
      "Improve the quality of your life and make it healthier",
    ],
  },
];
const cardDetails = [
  {
    value: "0",
    image: signUpImage,
    alt: "sign up",
    step: "Sign Up or Log In ",
    details:
      "You must have an account in Khiam and log in to it. If you are logged in, go to the next step, or create an account on the site by clicking this button. ",
    buttonContent: "SignUp",
  },{
    value: "1",
    image: navMenu,
    alt: "nav menu",
    step: "click on consulting ",
    details:
      "You  have to click to the menu icon from the nav bar services then dental then consulting, or immediately click this button ",
    buttonContent: "on line consulting",
  },{
    value: "2",
    image: fillTheForm,
    alt: "fill the form",
    step: "Fill The Fields",
    details:
      "Fill the fields in your information and describe how can we help you, then click to submit button",
    buttonContent: "on line consulting",
  },{
    value: "3",
    image: fillTheForm,
    alt: "fill the form",
    step: "Wait for us",
    details:
      "Khiam will contact you during 24-48 hours and provide you with details, this service completely free",
    buttonContent: "Apply Now",
  }
];
function StepCard({ card }) {
  return (
    <TabPanel value={card.value}>
      <Card sx={{ maxWidth: 345, padding: "5px" }}>
        <CardActionArea>
          <CardMedia
          
            component="img"
            height="200"
            width="100%"
            size="small"
            image={card.image}
            alt={card.alt}
            sx={{objectFit: "fill" }}
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
          <Button size="small" color="primary">
            {card.buttonContent}
          </Button>
        </CardActions>
      </Card>
    </TabPanel>
  );
}

function ServiceDetails({ item }) {
  console.log(item);
  return (
    <>
      <TabPanel value={item.value}>
        <Typography variant="body1">{item.introduction}</Typography>
        <Typography variant="h4">
          Some of what you get from this service
        </Typography>
        <Box>
          <Card>
            <List>
              {item.advanteges.map((advantage, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <TurnedInNotTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText>{advantage}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Card>
        </Box>
      </TabPanel>
    </>
  );
}
export default function Services() {
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
  return (
    <Box
      spacing={2}
      justify="center"
      sx={{
        backgroundColor: theme.palette.primary.section,
        padding: { md: "5% 30% 5% 30%", xs: "20px" },
      }}
    >
      <Typography variant="h2">Services:</Typography>
      <Typography variant="h5">
        We offer you and your family varient health services that range from
        remote consultation to diagnosis and suggesting treatment plans. You can
        also communicate with the most skilled doctors, travel and receive
        treatment. Click on the type of service you need and read about the full
        details
      </Typography>
      <Box
        className="centerFlexRow"
        sx={{ margin: "10px auto", padding: "10px" }}
      >
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="consulting" value="0" />
                <Tab label="diagnoises" value="1" />
              </TabList>
            </Box>

            {details.map((item) => {
              return <ServiceDetails item={item} />;
            })}
          </TabContext>
        </Box>
      </Box>
      <Typography variant="h4">How to get this service?</Typography>
      <Typography variant="body1">
        To use this service and have the full information, completly on line
        follow the steps:
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={stepValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleStepChange}
              aria-label="lab API tabs example"
            >
              <Tab label="step 1" value="0" />
              <Tab label="step 2" value="1" />
              <Tab label="step 3" value="2" />
              <Tab label="step 4" value="3" />
            </TabList>
          </Box>
          {cardDetails.map((card, i) => {
            return <StepCard card={card} key={i} />;
          })}
        </TabContext>
      </Box>
    </Box>
  );
}
