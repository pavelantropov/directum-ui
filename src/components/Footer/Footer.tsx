import { Paper, Typography } from "@mui/material";
import logoFooter from "../../images/logoFooter.png";

function Footer() {
  return (
    <>
      {/* TODO:  */}
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
          <small>© DIRECTUM, 2022</small>
        </Typography>
      </Paper>
    </>
  );
}

export default Footer;
