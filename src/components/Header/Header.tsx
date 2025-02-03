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
            justifyContent: { xs: "center", md: "space-between" }, // Centralizado no mobile, separado no desktop
            flexDirection: { xs: "column", md: "row" }, // Empilha no mobile
            height: { xs: "auto", md: "85px" },
            padding: { xs: "15px 20px", md: "0 40px" }, // Padding lateral maior no desktop
            gap: { xs: "10px", md: "0" }, // Espaço entre elementos no mobile
          }}
        >
          <Box>
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "150px",
                height: "auto",
                objectFit: "contain",
                maxWidth: "160px",
              }}
            />
          </Box>

          <Box sx={{ mt: { xs: "10px", md: "0" } }}>
            <ButtonWhatsApp />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
