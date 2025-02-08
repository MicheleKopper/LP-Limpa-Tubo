import { Box, Card, CardMedia, Typography } from "@mui/material";

export function Banner() {
  return (
    <Card sx={{ width: "100%", position: "relative", borderRadius: 0 }}>
      <CardMedia
        sx={{
          height: { xs: 200, sm: 300, md: 400 },
          objectFit: "cover",
        }}
        image="/cupim.png"
        title="banner"
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
          py: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: { xs: 14, sm: 16, md: 20 },
            fontWeight: 400,
            whiteSpace: "normal",
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "clip",
            wordBreak: "break-word",
          }}
        >
          Serviço rápido, seguro e 100% eficaz contra infestações
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: { xs: 24, sm: 35, md: 45 },
            fontWeight: 500,
            whiteSpace: "normal",
            lineHeight: 1.2,
            maxWidth: "90%",
            overflow: "hidden",
            textOverflow: "clip",
            wordBreak: "break-word",
          }}
          gutterBottom
        >
          CUPINS? NÓS TEMOS A SOLUÇÃO DEFINITIVA
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: { xs: 14, sm: 16, md: 20 },
            fontWeight: 400,
            whiteSpace: "normal", // Permite que o texto quebre nas linhas
            lineHeight: 1.4,
            overflow: "hidden",
            textOverflow: "clip", // Garantir que o texto não ultrapasse os limites
            wordBreak: "break-word", // Quebrar palavras longas quando necessário
          }}
        >
          Atendemos 24h toda POA e região metropolitana
        </Typography>
      </Box>
    </Card>
  );
}
