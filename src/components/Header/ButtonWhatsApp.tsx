import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function ButtonWhatsApp() {
  return (
    <Button
      variant="contained"
      sx={{
        minWidth: "180px",
        maxWidth: "250px",
        width: "100%",
        fontSize: "16px",
        padding: "10px 20px",
        bgcolor: "#25D366",
        color: "#fff",
        borderRadius: "50px",
        textTransform: "uppercase",
        outline: "2px solid #fff",
        outlineOffset: "-5px",
        transition: "0.2s ease-in-out",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: "800", // Garantindo a fonte em negrito
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
      <Typography sx={{ fontWeight: 800 }} noWrap>
        (51) 99790-7090
      </Typography>
    </Button>
  );
}
