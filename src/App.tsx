import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { Themes } from "./config/themes/themes";

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
