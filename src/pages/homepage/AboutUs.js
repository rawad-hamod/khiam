import { useTranslation } from "react-i18next";
import { Divider, Box, Typography } from "@mui/material";

export default function AboutUs() {
  // translation
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        margin: "0",
        minWidth: "100%",
        backgroundColor: "background.section",
      }}
      p={2}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: { xs: "90%", md: "60%" },
          margin: "20px auto",
        }}
        href="/aboutus"
      >
        <Typography variant="h2">{t("about us")} </Typography>
        <Divider
          sx={{ width: "20%", margin: "10px auto", textAlign: "justify" }}
        />

        <Typography variant="h6" center>
          {t("about us description")}
        </Typography>
      </Box>
    </Box>
  );
}
