import { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Button,
  Container,
  Paper,
} from "@mui/material";
import GeneralInformation from "./dentistreyComponent/generalInformation";
import TreatmentInfo from "./dentistreyComponent/TreatmentInfo";
import TeethPhotos from "./dentistreyComponent/TeethPhotos";
import DPR from "./dentistreyComponent/DPR";
import { useTranslation } from "react-i18next";

export default function Dentistry() {
  const { t } = useTranslation();
  const {
    generalInformation,
    typeOfTreatment,
    teethPhotos,
    next,
    back,
    submit,
    dpr,
  } = t("dentistry");

  const steps = [generalInformation, typeOfTreatment, teethPhotos, dpr];

  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const [form, setForm] = useState({
    birthDate: "",
    sex: "",
    chronicDiseases: "",
    chronicDiseasesDetails: "",
    smoker: "",
    typeOfTreatment: "",
    treatmentTitle: "",
    tratmentDescription: "",
    frontTeeth: "",
    upperJaw: "",
    lowerJaw: "",
    DPR: "",
  });
  console.log(form);

  function handleSubmit() {
    if (activeStep === steps.length - 1) {
      console.log("last step");
    } else {
      setActiveStep((prevStep) => prevStep + 1);
      console.log("clicked");
    }
  }

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <GeneralInformation form={form} setForm={setForm} />;
      case 1:
        return <TreatmentInfo form={form} setForm={setForm} />;
      case 2:
        return <TeethPhotos form={form} setForm={setForm} />;
      case 3:
        return <DPR form={form} setForm={setForm} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      className="centerFlexColumn"
      sx={{
        padding: 2,
        margin: "50px auto",
        minHeight: "500px",
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
        sx={{ maxWidth: "800px", margin: "5px auto" }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container component="main" maxWidth="sm">
        <Paper
          variant="outlined"
          sx={{ padding: 3, margin: "10px auto", minHeight: "400px" }}
        >
          <Grid container className="centerFlexColumn">
            <form>
              <Grid item xs={12} sx={{ padding: "20px"}} fullWidth>
                {formContent(activeStep)}
              </Grid>

              <Grid item xs={12} className="centerFlexRow" fullwidth>
               
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    {back}
                  </Button>
                

                {activeStep === steps.length - 1 ? (
                 
                    <Button variant="contained" color="secondary">
                      {submit}
                    </Button>
                 
                ) : (
                  
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSubmit}
                    >
                      {next}
                    </Button>
                
                )}
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
