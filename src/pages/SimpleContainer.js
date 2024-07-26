import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

export default function SimpleContainer({ image , title }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0",
          padding: "0",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url('${image}')`,
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
           
          }}
        >
           <Grid container>
            <Grid item xs={6}>
<Typography variant="h2" sx={{color:'black'}}>
{title}
</Typography>
            </Grid>

           </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
