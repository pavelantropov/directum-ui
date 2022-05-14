import { Box, Paper, Typography } from "@mui/material";
import logoFooter from "../../images/logoFooter.png";

function Footer() {
  return (
    <>
      <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
        <Paper square sx={{
          textAlign: "center", 
          color: "#BABABA",
          bgcolor: "#F8F9FA"
        }}>
          <img src={logoFooter} style={{padding: "20px 0 5px 0"}} />
          <Typography paddingBottom={3}>
            <small>© DIRECTUM, 2022</small>
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default Footer;
