import { Button, Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function ButtonWhatsApp() {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: "#25D366", borderRadius: "100px" }}
      startIcon={<WhatsAppIcon />}
    >
      {" "}
      <Link href="https://wa.me/5551997907090">
        <Typography>(51) 99790-7090</Typography>
      </Link>
    </Button>
  );
}
