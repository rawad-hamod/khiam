import {
  Grid,
  TextField,
  FormLabel,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const GeneralInformation = ({ form, setForm }) => {
  const { t } = useTranslation();
  const { smoker, yes, no ,chronicDeseaseBoolean,chronicDiseaseMention} = t("dentistry");
  const { sex, male, female, birthDate } = t("askAmedicalQuestion");
  console.log(form);
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormLabel>{birthDate}</FormLabel>
        <TextField
          required
          name="birthDate"
          variant="filled"
          type="date"
          fullWidth
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          value={form.birthDate}
        />
      </Grid>
      <Grid item xs={6} fullWidth>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>{sex}</FormLabel>
          <Select
            required
            variant="filled"
            name="sex"
            helpText=" "
            value={form.sex}
            onChange={(e) => setForm({ ...form, sex: e.target.value })}
          >
            <MenuItem value="male">{male}</MenuItem>
            <MenuItem value="female">{female}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} justify="center">
        <FormControl sx={{ width: "100%" }}>
          <FormLabel id="smoking">{smoker}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="smoking"
            name="smoker"
            value={form.smoker}
            onChange={(e) => setForm({ ...form, smoker: e.target.value })}
          >
            <FormControlLabel value="yes" control={<Radio />} label={yes} />
            <FormControlLabel value="no" control={<Radio />} label={no} />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} fullWidth>
        <FormControl sx={{ width: "100%" }}>
          <FormLabel>{chronicDeseaseBoolean}</FormLabel>
          <Select
            required
            sx={{ width: "100" }}
            variant="filled"
            name="chronicDisease"
            value={form.chronicDiseases}
            helptext=" "
            onChange={(e) =>
              setForm({ ...form, chronicDiseases: e.target.value })
            }
          >
            <MenuItem value="yes">{yes}</MenuItem>
            <MenuItem value="no">{no}</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="chronicDiseasesDetails"
          label={chronicDiseaseMention}
          variant="filled"
          disabled={Boolean(form.chronicDiseases === "no")}
          type="text"
          fullWidth
          value={form.chronicDiseasesDetails}
          onChange={(e) =>
            setForm({ ...form, chronicDiseasesDetails: e.target.value })
          }
        />
      </Grid>
    </Grid>
  );
};

export default GeneralInformation;
