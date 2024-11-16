import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Paper,
  TextField,
  Grid,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormLabel,
  Divider,
} from "@mui/material";

export default function AskMedicalQuestion() {
  const { t } = useTranslation();
  const {
    title,
    personalInformation,
    firstName,
    lastName,
    email,
    phoneNumber,
    sex,
    male,
    female,
    birthDate,
    medicalQuest,
    medicalField,
    dentistry,
    medicine,
    comestic,
    yourQues,
    yourQuesEx,
    quesDetails,
    send
  } = t("askAmedicalQuestion");
  const [medicalQuestion, setMedicalQuestion] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    sex: "",
    birthDate: "",
    medicalField: "",
    shortQuestion: "",
    details: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(medicalQuestion);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Fragment>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="secondary"
            >
              {title}
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography
                variant="h6"
                sx={{ textDcoration: "underLine" }}
                gutterBottom
              >
                <i>{personalInformation}</i>
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label={firstName}
                    name="firstName"
                    value={medicalQuestion.firstName}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        firstName: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label={lastName}
                    name="lastName"
                    value={medicalQuestion.lastName}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        lastName: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label={email}
                    name="email"
                    value={medicalQuestion.email.trim()}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        email: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label={phoneNumber}
                    placeholder="09********"
                    name="phoneNumber"
                    value={medicalQuestion.phoneNumber.trim()}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        phoneNumber: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ textAlign: "left" }}>{sex}</FormLabel>
                  <Select
                    required
                    fullWidth
                    variant="filled"
                    name="sex"
                    helpText=" "
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        sex: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="male">{male}</MenuItem>
                    <MenuItem value="female">{female}</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ textAlign: "left" }}>{birthDate}</FormLabel>
                  <TextField
                    type="date"
                    required
                    name="birthDate"
                    value={medicalQuestion.birthDate}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        birthDate: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                <i> {medicalQuest}</i>
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormLabel sx={{ textAlign: "left" }}>
                    {medicalField}
                  </FormLabel>
                  <Select
                    required
                    label="choose the medical field"
                    fullWidth
                    variant="filled"
                    name="medicalField"
                    onSelect={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        medicalField: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="Dentistry">{dentistry}</MenuItem>
                    <MenuItem value="Medicine">{medicine}</MenuItem>
                    <MenuItem value="Surgical or non-surgical plastic surgery">
                      {comestic}
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label={yourQues}
                    placeholder={yourQuesEx}
                    name="question"
                    value={medicalQuestion.shortQuestion}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        shortQuestion: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    placeholder={quesDetails}
                    name="question"
                    value={medicalQuestion.details}
                    onChange={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        details: e.target.value,
                      })
                    }
                    fullWidth
                    variant="filled"
                    multiline
                    rows={5}
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, ml: 1 }}
              fullWidth
              color="secondary"
            >
              {send}
            </Button>
          </Paper>
        </Container>
      </Fragment>
    </form>
  );
}
