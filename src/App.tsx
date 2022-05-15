import { Grid } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { DefaultTableItems } from "./components/mockData/mockData";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Table from "./components/Table/Table";
import Text from "./components/Text/Text";

function App() {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  return (
    <>
      <Banner {...{isRegistrationFormOpen, setIsRegistrationFormOpen}} />
      <Grid container spacing={3} sx={{
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "#F8F9FA",
        padding: "2rem 1rem"
      }}>
        <Grid item xs={12} md={5} paddingX={2}>
          <Text />
        </Grid>
        {
          isRegistrationFormOpen &&
          <Grid item xs={12} md={5} paddingX={2}>
            <RegistrationForm />
          </Grid>
        }
      </Grid>
      <Table {...{
        title: "Наши спикеры",
        items: DefaultTableItems
      }} />
      <Footer />
    </>
  );
}

export default App;
