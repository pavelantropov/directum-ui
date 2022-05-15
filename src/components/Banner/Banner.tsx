import { Button, Paper, Typography } from "@mui/material";
import logoBanner from "../../images/logoBanner.png";
import React from "react";

interface Props {
  isRegistrationFormOpen: boolean;
  setIsRegistrationFormOpen: (isOpen: boolean) => void;
}

function Banner({ isRegistrationFormOpen, setIsRegistrationFormOpen }: Props) {

  const handleRegistrationClick = () => setIsRegistrationFormOpen(!isRegistrationFormOpen);

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
        <Typography variant="h5" paddingY={3}>
          в самом сердце страны
        </Typography>
        <Button 
          variant="contained" 
          onClick={handleRegistrationClick} 
          size="large">
          Регистрация
        </Button>
      </Paper>
    </>
  );
}

export default Banner;
