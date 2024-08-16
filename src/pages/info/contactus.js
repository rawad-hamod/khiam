import { Button, Grid, TextField, Typography, Container, Box} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
    const{t}=useTranslation();
    const{title,desc,firstname,lastname,email,question,send,firstnameExample,lastnameExample}=t("contactus")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    question: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <Container component="main" maxWidth="lg" sx={{margin:"100px auto" }}>
      <Grid container spacing={3} justify="center" className="centerFlexRow">

        <Grid item xs={12} md={6}>
        <Box
            variant="outlined"
            sx={{ width:"60%",alignText:"center"}}
          >
          <Typography variant="h3" color="secondary" className="moveInRigth">
           
            {title}
          </Typography>
          <Typography variant="h5" className="moveInLeft" >
            {desc}
          </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box
            variant="outlined"
            // sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}
          >
          <Grid
            container
            rowSpacing={3}
            component="form"
            onSubmit={handleSubmit}
            pt={3}
            >
            
           
            <Grid item xs={12} sm={6}>
              <TextField
               fullWidth
                type="text"
                required
                variant="filled"
                name="firstName"
                label={firstname}
                placeholder={firstnameExample}
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               fullWidth
              
                type="text"
                required
                variant="filled"
                name="lastName"
                label={lastname}
                placeholder={lastnameExample}
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
             
            </Grid>
         
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                required
                variant="filled"
                name="email"
                label={email}
                placeholder="abc@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                required
                variant="filled"
                name="question"
                label={question}
                value={form.question}
                onChange={(e) => setForm({ ...form, question: e.target.value })}
                multiline
                rows={5}
              />
            </Grid>
            <Grid item xs={12} >
              <Button variant="contained" type="submit"  color="secondary" fullWidth >
                {send}
              </Button>
            </Grid>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
