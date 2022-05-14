import { Paper, Typography } from "@mui/material";
import logoBanner from "../../images/logoBanner.png";

function Banner() {
  return (
    <>
      <Paper square sx={{
        textAlign: "center", 
        color: "#FFFFFF",
        bgcolor: "#17A2B8",
        padding: "10rem 0 10rem 0"
      }}>
        <img src={logoBanner} />
        <Typography variant="h4" component="h1" paddingTop={5}>
          НАЗВАНИЕ МЕРОПРИЯТИЯ
        </Typography>
        <Typography variant="h5" paddingTop={4}>
          4 МАЯ 2049
        </Typography>
        <Typography variant="h5" paddingTop={3}>
          в самом сердце страны
        </Typography>
      </Paper>
    </>
  );
}

export default Banner;
