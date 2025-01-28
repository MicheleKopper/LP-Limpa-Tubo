import { AppBar, Box, Toolbar } from "@mui/material";
import { ButtonWhatsApp } from "./ButtonWhatsApp";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          <ButtonWhatsApp />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
