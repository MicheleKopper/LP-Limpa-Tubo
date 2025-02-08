import { Box, Typography, CardMedia, Grid2 } from "@mui/material";


export function SobreNos() {
  return (
    <Box sx={{ bgcolor: "#FFF2F2", py: 5, px: 3 }}>
      <Grid2
        container
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Mobile 1 col, Desktop 2 col
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Imagem à esquerda */}
        <Grid2>
          <CardMedia
            component="img"
            image="sobrenos.jpeg"
            alt="Cupim sendo tratado"
            sx={{
              width: "100%",
              maxHeight: 350,
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          />
        </Grid2>

        {/* Texto à direita */}
        <Grid2
          sx={{ textAlign: "left", marginLeft: "30px", marginRight: "30px" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#F5811F",
              mb: 2,
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 25,
              fontWeight: 400,
            }}
          >
            SOBRE NÓS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              mb: 2,
            }}
          >
            Há 25 anos, a <strong>Limpa Tubo</strong> oferece serviços
            especializados no combate a cupins, desentupimento e limpeza de
            fossas. Atuamos em Porto Alegre e região metropolitana, sempre com
            tecnologia de ponta e respeito ao meio ambiente.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Nosso compromisso é garantir um ambiente seguro e livre de cupins,
            utilizando métodos modernos e eficazes de controle e prevenção.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
