import { createTheme } from "@mui/material";

export const Themes = createTheme({
  breakpoints: {
    values: {
      xs: 0, // celular
      sm: 600, // tablet
      md: 900, // tablet grande ou laptop
      lg: 1200, // desktop
      xl: 1536, // telas maiores
    },
  },

  typography: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeightBold: 800, // Peso da fonte bold
    h3: {
      fontSize: "2rem",
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h4: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": { fontSize: "1.2rem" },
    },
  },

  components: {
    // Estilos globais para o container
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width:600px)": { maxWidth: "90%" },
          "@media (min-width:960px)": { maxWidth: "80%" },
        },
      },
    },
  },
});
