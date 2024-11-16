import React, { useRef, useState } from "react";
import frontTeethPhoto from "../../../assests/dentalTreatment/frontTeeth.jpg";
import upperJawPhoto from "../../../assests/dentalTreatment/upperJaw.jpg";
import lowerJawPhoto from "../../../assests/dentalTreatment/lowerJaw.jpg";
import { Grid, Avatar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const TeethPhotos = ({ form, setForm }) => {
  const { t } = useTranslation();
  const { uploadYours, frontTeeth, upperJaw, lowerJaw } = t("dentistry");
  const inputRefFrontTeeth = useRef(null);
  const [frontTeethToDisplay, setFrontTeethToDisplay] = useState();
  const inputRefUpperJaw = useRef(null);
  const [upperJawToDisplay, setUpperJawDisplay] = useState();
  const inputRefLowerJaw = useRef(null);
  const [lowerJawToDisplay, setLowerJawDisplay] = useState();

  const uploadFrontTeeth = () => {
    inputRefFrontTeeth.current.click();
  };
  const uploadUpperJaw = () => {
    inputRefUpperJaw.current.click();
  };
  const uploadLowerJaw = () => {
    inputRefLowerJaw.current.click();
  };

  const handleChangeFrontTeeth = async (e) => {
    await setForm({ ...form, frontTeeth: e.target.files[0] });
    setFrontTeethToDisplay(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeUpperJaw = async (e) => {
    await setForm({ ...form, upperJaw: e.target.files[0] });
    setUpperJawDisplay(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeLowerJaw = async (e) => {
    await setForm({ ...form, lowerJaw: e.target.files[0] });
    setLowerJawDisplay(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Grid
      container
      columnSpacing={10}
      rowSpacing={2}
      p={2}
      className="centerFlexColumn"
    >
      {/* <Typography color="secondary" variant="body2" sx={{textWrap:"wrap"}} >
        {" "}
        please upload your teeth photos as these samples below:{" "}
      </Typography> */}
      <Grid item xs={4} fullWidth spacing={2} justify="center">
        <div className="centerFlexColumn">
          <input
            style={{ display: "none" }}
            type="file"
            name="frontTeeth"
            accept="image/*"
            ref={inputRefFrontTeeth}
            onChange={handleChangeFrontTeeth}
          />
          <p
            sx={{
              width: "100%",
              marginBottom: "1rem",
              alignText: "center",
              textWrap: "nowrap",
            }}
          >
            {frontTeeth}
          </p>

          <Avatar
            sx={{ width: 100, height: 100 }}
            src={form.frontTeeth === "" ? frontTeethPhoto : frontTeethToDisplay}
          />
          <Button
            variant="outlined"
            onClick={uploadFrontTeeth}
            sx={{
              fontSize: "0.7rem",

              width: "100%",
              marginTop: "0rem",
              alignText: "center",
              textWrap: "nowrap",
            }}
          >
            {uploadYours}
          </Button>
        </div>
      </Grid>

      <Grid item xs={4} fullWidth spacing={2} justify="center">
        <div className="centerFlexColumn">
          <input
            style={{ display: "none" }}
            type="file"
            name="upperJaw"
            accept="image/*"
            ref={inputRefUpperJaw}
            onChange={handleChangeUpperJaw}
          />
          <p
            sx={{
              width: "100%",
              marginBottom: "1rem",
              alignText: "center",
              textWrap: "nowrap",
            }}
          >
            {upperJaw}
          </p>

          <Avatar
            sx={{ width: 100, height: 100 }}
            src={form.upperJaw === "" ? upperJawPhoto : upperJawToDisplay}
          />
          <Button
            variant="outlined"
            onClick={uploadUpperJaw}
            sx={{
              fontSize: "0.7rem",

              width: "100%",
              marginTop: "0rem",
              alignText: "center",
              textWrap: "nowrap",
            }}
          >
            {uploadYours}
          </Button>
        </div>
      </Grid>
      <Grid item xs={4} fullWidth spacing={2} justify="center">
        <input
          style={{ display: "none" }}
          type="file"
          name="upperJaw"
          accept="image/*"
          ref={inputRefLowerJaw}
          onChange={handleChangeLowerJaw}
        />
        <p
          sx={{
            width: "100%",
            marginBottom: "1rem",
            alignText: "center",
            textWrap: "nowrap",
          }}
        >
          {lowerJaw}
        </p>

        <Avatar
          sx={{ width: 100, height: 100 }}
          src={form.lowerJaw === "" ? lowerJawPhoto : lowerJawToDisplay}
        />
        <Button
          variant="outlined"
          onClick={uploadLowerJaw}
          sx={{
            fontSize: "0.7rem",

            width: "100%",
            marginTop: "0rem",
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
export default TeethPhotos;
