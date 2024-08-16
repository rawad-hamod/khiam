import { Fragment, useState } from "react";
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
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function AskMedicalQuestion() {
    const theme=useTheme();
    console.log(theme.palette.background)
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
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}
          >
            <Typography component="h1" variant="h4" align="center">
              Ask A medical Question:
            </Typography>

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                personal information:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="First name:"
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
                    label="Last name:"
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
                    label="email:"
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
                    label="phone number:"
                    placeholder="example:09********"
                    name="phoneNumber"
                    value={medicalQuestion.phoneNumber.trim()}
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
                <Grid item xs={12} sm={6}>
                  <FormLabel sx={{ textAlign: "left" }}>
                    sex:
                  </FormLabel>
                  <Select
                    required
                    
                    fullWidth
                    variant="filled"
                    name="sex"
                    helpText=" "
                    onSelect={(e) =>
                      setMedicalQuestion({
                        ...medicalQuestion,
                        sex: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="male">male</MenuItem>
                    <MenuItem value="female">female</MenuItem>
                    
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormLabel sx={{ textAlign: "left" }}>
                    birth of date:
                  </FormLabel>
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

            <Box sx={{ my: 3 }}>
              <Typography variant="h6" gutterBottom>
                Medical Question:
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormLabel sx={{ textAlign: "left" }}>
                    Medical Field:
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
                    <MenuItem value="Dentistry">Dentistry</MenuItem>
                    <MenuItem value="Medicine">Medicine</MenuItem>
                    <MenuItem value="Surgical or non-surgical plastic surgery">
                      Surgical or non-surgical plastic surgery
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    label="Your question:"
                    placeholder="example:What are the causes of stomach pain?"
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
                    placeholder="Explain symptoms and health problems, seek medical advice"
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
              send
            </Button>
          </Paper>
        </Container>
      </Fragment>
    </form>
  );
}
