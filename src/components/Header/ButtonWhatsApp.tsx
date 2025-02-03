import { Button, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function ButtonWhatsApp() {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#25D366",
        color: "#fff",
        fontSize: "14px",
        padding: "10px 20px",
        borderRadius: "50px",
        width: "200px",
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
