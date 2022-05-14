import { Paper, Typography } from "@mui/material";
import logoFooter from "../../images/logoFooter.png";

function Footer() {
  return (
    <>
      <Paper square sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center", 
        color: "#BABABA",
        bgcolor: "#F8F9FA",
        padding: "2rem 0 2rem 0"
      }}>
        <img src={logoFooter} />
        <Typography>
          <small>© DIRECTUM, 2022</small>
        </Typography>
      </Paper>
    </>
  );
}

export default Footer;
