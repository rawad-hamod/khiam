import { Divider, Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{textAlign:"center",maxWidth:{xs:"90%",md:'60%'},margin:"20px auto"}}>
      <Typography variant="h2">About Us <Divider sx={{width:'20%', margin:"10px auto",textAlign:"justify"}}/></Typography>
      
      <Typography variant="h4" center>
      <strong><i>Al-Khayyam</i></strong> is an electronic medical platform specialized in providing health care services on line and facilitating access to it by patients and users. 
We believe in the importance of technology in improving the quality of health care and saving time and effort for patients. 
Try to be a link between patients and medical providers, focusing on providing a safe and comfortable user experience.
      </Typography>
    </Box>
  );
}
