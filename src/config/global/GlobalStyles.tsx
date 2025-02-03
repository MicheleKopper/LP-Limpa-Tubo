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
    fontFamily: "'Open Sans', 'Quicksand', sans-serif",
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
