import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { Themes } from "./config/themes/themes";

// Importando o arquivo CSS onde a animação 'blink' está definida


function App() {
  return (
    <>
      <ThemeProvider theme={Themes}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
