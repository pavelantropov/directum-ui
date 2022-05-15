import { Paper, Typography } from "@mui/material";
import logoFooter from "../../images/logoFooter.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Paper square sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center", 
        color: "#BABABA",
        bgcolor: "#F8F9FA",
        padding: "2rem 0"
      }}>
        <img src={logoFooter} />
        <Typography>
          <small>© DIRECTUM, {currentYear}</small>
        </Typography>
      </Paper>
    </>
  );
}

export default Footer;
