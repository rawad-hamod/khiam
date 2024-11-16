import React from "react";
import {
  Grid,
  TextField,
  FormLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useTranslation } from "react-i18next";
const TreatmentInfo = ({ form, setForm }) => {
  const { t } = useTranslation();
  const {
    typeOfTreatment,
    dentalImplant,
   
    dentalTreatment,
    treatmentTitle,
    treatmentExample,
    traetmentDescription,
    treatmentDetails,
    jawSurgery,
    hollywoodSmile,
    veneer
    
  
  } = t("dentistry");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} fullWidth>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>{typeOfTreatment}</FormLabel>
          <Select
            required
            variant="filled"
            name="typeOfTreatment"
            helpText=" "
            value={form.typeOfTreatment}
            onChange={(e) =>
              setForm({ ...form, typeOfTreatment: e.target.value })
            }
          >
            <MenuItem value="dentaImplant">{dentalImplant}</MenuItem>
            <MenuItem value="jawSurgery">{jawSurgery}</MenuItem>
            <MenuItem value="hollywoodSmile">{hollywoodSmile}</MenuItem>
            <MenuItem value="dentalTreatment">{dentalTreatment}</MenuItem>
            <MenuItem value="veneer">{veneer}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="treatmentTitle"
          label={treatmentTitle}
          placeholder={treatmentExample}
          variant="filled"
          type="text"
          fullWidth
          value={form.treatmentTitle}
          onChange={(e) => setForm({ ...form, treatmentTitle: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="tratmentDescription"
          label={traetmentDescription}
          placeholder={treatmentDetails}
          variant="filled"
          multiline
          rows={4}
          type="text"
          fullWidth
          value={form.tratmentDescription}
          onChange={(e) =>
            setForm({ ...form, tratmentDescription: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};
export default TreatmentInfo;
