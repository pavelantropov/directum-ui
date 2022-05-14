import {
  ThemeProvider, //
  createTheme,
  useMediaQuery,
} from "@mui/material";
import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* TODO: */}
      </ThemeProvider>
    </>
  );
}

export default App;
