import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function ButtonWhatsApp() {
  return (
    <Button
      variant="contained"
      sx={{
        minWidth: "180px", // Garante um tamanho mínimo fixo
        maxWidth: "200px", // Evita que fique muito grande
        width: { xs: "150px", sm: "180px", md: "200px" }, // Ajusta dinamicamente
        fontSize: { xs: "12px", sm: "14px" }, // Reduz a fonte em telas menores
        padding: { xs: "8px 16px", sm: "10px 20px" },
        bgcolor: "#25D366",
        color: "#fff",
        borderRadius: "50px",
        textTransform: "uppercase",
        outline: "2px solid #fff",
        outlineOffset: "-5px",
        transition: "0.2s ease-in-out",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 800,
        "&:hover": {
          color: "#25D366",
          backgroundColor: "#fff",
          outlineColor: "#25D366",
          outlineOffset: "0",
        },
      }}
      startIcon={<WhatsAppIcon />}
      href="https://wa.me/5551997907090"
    >
      <Typography noWrap>(51) 99790-7090</Typography>
    </Button>
  );
}
