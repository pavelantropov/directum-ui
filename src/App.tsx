import { Paper } from "@mui/material";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Text from "./components/Text/Text";

function App() {

  return (
    <>
      <Banner />
      <Paper square sx={{
        textAlign: "center",
        bgcolor: "#F8F9FA",
        padding: "2rem 0 2rem 0"
      }}>
        <Text />
      </Paper>
      <Footer />
    </>
  );
}

export default App;
