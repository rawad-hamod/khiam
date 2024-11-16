import React, { useRef, useState } from "react";
import dpr from "../../../assests/dentalTreatment/dpr.jpg";

import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const DPR = ({ form, setForm }) => {
  const { t } = useTranslation();
  const { DPRtitle, uploadYours } = t("dentistry");
  const inputRefDPR = useRef(null);
  const [DPRToDisplay, setDPRToDisplay] = useState();

  const uploadDPR = () => {
    inputRefDPR.current.click();
  };

  const handleChangeDPR = async (e) => {
    await setForm({ ...form, DPR: e.target.files[0] });
    setDPRToDisplay(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} fullWidth >
        
          
            <TextField
              style={{ display: "none" }}
              type="file"
              name="DPR"
              accept="image/*"
              ref={inputRefDPR}
              onChange={handleChangeDPR}
            />
            <Typography
              sx={{
                width: "100%",
                marginBottom: "1rem",
                alignText: "center",
                textWrap: "nowrap",
              }}
            >
              {DPRtitle}
            </Typography>

            <Avatar
              sx={{ width: 200, height: 200,margin: "1px auto", }}
              src={form.DPR === "" ? dpr : DPRToDisplay}
              alt="dpr"
            />
            <Button
            fullWidth
             variant="outlined"
         
              onClick={uploadDPR}
            sx={{
                fontSize: "0.7rem",

                margin: "1px auto",
                alignText: "center",
                textWrap: "nowrap",
              }}
            >
              {uploadYours}
            </Button>
         
      
      </Grid>
    </Grid>
  );
};
export default DPR;
