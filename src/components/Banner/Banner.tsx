import { Button, Paper, Typography } from "@mui/material";
import logoBanner from "../../images/logoBanner.png";
import { DefaultMenuItems } from "../../mockData/mockData";
import Menu from "../Menu/Menu";

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
        <Typography variant="h4" component="h1" marginTop={5}>
          НАЗВАНИЕ МЕРОПРИЯТИЯ
        </Typography>
        <Typography variant="h5" marginTop={4}>
          4 МАЯ 2049
        </Typography>
        <Typography variant="h5" marginY={3}>
          в самом сердце страны
        </Typography>
        <Button
          variant="contained" 
          onClick={handleRegistrationClick} 
          size="large"
          sx={{marginBottom: 2}}>
          Регистрация
        </Button>
        <Menu {...{items: DefaultMenuItems}} />
      </Paper>
    </>
  );
}

export default Banner;
