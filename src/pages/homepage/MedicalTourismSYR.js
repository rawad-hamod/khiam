import React from "react";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";;
function MedicalTourismSYR(props) {
  // theme
  const theme = useTheme();
   // translation
   const { t } = useTranslation();
  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
          
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", margin: "10px" }}
            >
              {t("Medical Tourism in Syria:")}
            </Typography>
            <Divider sx={{width:'20%', margin:"10px auto",textAlign:"center" }}/>
          </Grid>
          
          <Grid
            item
            xs={12}
            md={6}
            sx={{ dislay: "flex", alignItems: "center", gap: "20px" }}
          >
            <Avatar
              variant="circular"
              sx={{
                width: "300px",
                height: "300px",
                border: "solid black 2px",
                borderRadius: "50%",
                fontSize: "200px",
                margin: "10px auto",
              }}
              size="large"
            >
              {" "}
              <FontAwesomeIcon icon={faTooth} />{" "}
            </Avatar>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h4" sx={{alignText:"justify",}}>
              {t("medical tourism section description")}
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MedicalTourismSYR;
