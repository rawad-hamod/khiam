import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const countries = ["Lebanon", "UAE", "Bahrain", "KSA", "Qatar"];
export default function Consulting() {
  // translation
  const { t } = useTranslation();
  // theme
  const theme = useTheme();
  //   consulting form
  const [consultingForm, setConsultingForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phoneNumber: "",
    whatsAppNum: "",
    resedence: "",
    job: "",
    tests: "",
    MRI: "",
    notes: "",
  });
  console.log(consultingForm);
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h2">
            {t("Consulting Service:")}
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            sx={{ whiteSpace: "pre-wrap" }}
            textAlign="center"
          >
            <div>
              {t("How can you use this service?")} <br></br>
            </div>
            <div>
              {t(
                "Once you fill out the form at the bottom We will send you the following:"
              )}{" "}
            </div>
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <DoneIcon sx={{ color: theme.palette.text.success }} />
              </ListItemIcon>
              <ListItemText primary={t("Suggest treatment options")}  sx={{margin:"10px 0"}}/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon sx={{ color: theme.palette.text.success  }} />
              </ListItemIcon>
              <ListItemText primary={t("Treatment plan") }/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon sx={{ color: theme.palette.text.success }} />
              </ListItemIcon>
              <ListItemText primary={t("Approximate duration of treatment")} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneIcon sx={{ color: theme.palette.text.success }} />
              </ListItemIcon>
              <ListItemText primary={t("Estimated cost")} />
            </ListItem>
          </List>
        </Box>
      </Container>
      {/* consulting form aria */}
      <Container component="main" maxWidth="lg">
        <Paper >
          <Typography variant="h3" sx={{ alignText: "center" }} >{t("Please fill the form below :")}</Typography>
        </Paper>
        <Box
          component="form"
          onSubmit={() => {}}
          noValidate
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContext: "center",
            padding: { xs: "20px", lg: "0" },
          }}
        >
          <Grid container alignItems="center" spacing={3}>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="name"
                label="name"
                name="name"
                type="text"
                value={consultingForm.name}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    name: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="email"
                label="email"
                name="email"
                type="email"
                value={consultingForm.email}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    email: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="age"
                label="age"
                name="age"
                type="number"
                value={consultingForm.age}
                onChange={(e) => {
                  setConsultingForm({ ...consultingForm, age: e.target.value });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="gender"
                label="gender"
                name="gender"
                select
                value={consultingForm.gender}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    gender: e.target.value,
                  });
                }}
              >
                <MenuItem value="male">male</MenuItem>
                <MenuItem value="female">female</MenuItem>
              </TextField>
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="phone number"
                label="phone number"
                name="phone number"
                type="text"
                helperText="+96394******"
                value={consultingForm.phoneNumber}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    phoneNumber: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="whatsapp number"
                label="whatsapp number"
                name="whatsapp number"
                type="text"
                helperText="+96394******"
                value={consultingForm.whatsAppNum}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    whatsAppNum: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="Residence"
                label="resedence"
                name="resedence"
                select
                helperText="choose the country"
                value={consultingForm.resedence}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    resedence: e.target.value,
                  });
                }}
              >
                {countries.map((country) => {
                  return (
                    <MenuItem
                      key={country}
                      value={country}
                      sx={{ margin: "0px" }}
                    >
                      {country}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>
            <Grid Item xs={12} md={3}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                required
                id="job"
                label="job:"
                name="job"
                type="text"
                helperText="It may help us with diagnosis"
                value={consultingForm.job}
                onChange={(e) => {
                  setConsultingForm({ ...consultingForm, job: e.target.value });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                id="medical tests image"
                name="medical tests image"
                type="file"
                helperText="If medical tests were performed, please upload the photo or PDF file"
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    tests: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                id="Photos or video of an MRI"
                name="Photos or video of an MRI"
                type="file"
                helperText="If you had an MRI,CT,Pet CT please upload photo or video"
                value={consultingForm.MRI}
                onChange={(e) => {
                  setConsultingForm({ ...consultingForm, MRI: e.target.value });
                }}
              />
            </Grid>
            <Grid Item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                id="notes"
                name="notes"
                type="text aria"
                label="if you had some thing to tell us please type it here:"
                value={consultingForm.notes}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    notes: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid Item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                margin="normal"
                id="notes"
                name="notes"
                type="date"
                label="if you had some thing to tell us please type it here:"
                value={consultingForm.notes}
                onChange={(e) => {
                  setConsultingForm({
                    ...consultingForm,
                    notes: e.target.value,
                  });
                }}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled
            >
              continu to buy this service <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
