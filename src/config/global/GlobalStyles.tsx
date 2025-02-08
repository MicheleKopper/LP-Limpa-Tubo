import { GlobalStyles } from "@mui/material";
import { CSSObject } from "@emotion/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Quicksand', sans-serif", // Aplica a Quicksand globalmente
  },
  body: {
    fontFamily: "'Quicksand', sans-serif", // Garante que o body use Quicksand
  },
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "'Quicksand', sans-serif", // Aplica Quicksand nos títulos
  },
  p: {
    fontFamily: "'Quicksand', sans-serif", // Aplica Quicksand no texto
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
