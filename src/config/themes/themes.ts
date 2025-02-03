import { createTheme } from "@mui/material";

export const Themes = createTheme({
  typography: {
    h5: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 45,
      fontWeight: 400,
      "@media (max-width: 768px)": {
        fontSize: 30,
      },
    },
    h6: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 24,
      fontWeight: 400,
      "@media (max-width: 768px)": {
        fontSize: 18,
      },
    },
    h3: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 40,
      fontWeight: 400,
    },
    h4: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 30,
      fontWeight: 400,
      color: "rgb(245, 130, 31)",
    },
    subtitle1: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 15,
      fontWeight: 400,
    },

    body1: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 14,
      fontWeight: 800,
    },
    subtitle2: {
      fontFamily: "'Quicksand', sans-serif",
      fontSize: 13,
      fontWeight: 400,
    },
  },
});
