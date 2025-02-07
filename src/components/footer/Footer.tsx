import { Typography, Box, Grid2, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#1D1D1B",
        color: "white",
        py: 4,
        px: 2,
      }}
    >
      <Grid2
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* LOGO */}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <img
            src="/logo02.png"
            alt="Logo"
            style={{
              width: "155px",
              height: "auto",
              objectFit: "contain",
              maxWidth: "180px",
            }}
          />
        </Grid2>

        {/* ENDEREÇO */}
        <Grid2
          sx={{
            textAlign: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            ENDEREÇO
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            João Paris, 771 - Rubem Berta
            <br /> Porto Alegre/RS
          </Typography>
        </Grid2>

        {/* CONTATO */}
        <Grid2
          sx={{
            textAlign: "center",
            marginBottom: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            CONTATO
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <strong>WhatsApp:</strong> (51) 99790-7090
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            <strong>Ligue grátis:</strong> 0800-642-9230
          </Typography>
        </Grid2>

        {/* REDES SOCIAIS */}
        <Grid2
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "10px",
              alignItems: "flex-start",
            }}
          >
            REDES SOCIAIS
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <a
              href="https://www.facebook.com/DedetizadoraLimpaTubo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <FacebookIcon fontSize="large" />
            </a>

            <a
              href="https://www.instagram.com/limpa.tubo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <InstagramIcon fontSize="large" />
            </a>
          </Box>
        </Grid2>
      </Grid2>

      <Divider sx={{ paddingTop: "20px" }} />

      <Grid2 size={12} textAlign="center" sx={{ mt: 2, opacity: 0.7 }}>
        <Typography variant="body2" sx={{}}>
          Desenvolvido por
          <a
            href="https://wa.me/5551997997621"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "bold",
              marginLeft: "4px",
            }}
          >
            MKode
          </a>
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} MKode - Todos os direitos reservados.
        </Typography>
      </Grid2>
    </Box>
  );
}
