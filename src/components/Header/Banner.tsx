import { Box, Card, CardMedia, Typography } from "@mui/material";

export function Banner() {
  return (
    <Card sx={{ width: "100vw", position: "relative", borderRadius: 0 }}>
      <CardMedia
        sx={{ height: { xs: 200, sm: 300, md: 400 } }}
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
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: { xs: 14, sm: 18, md: 24 } }}>
          Serviço rápido, seguro e 100% eficaz contra infestações
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: 18, sm: 24, md: 32 } }}
          gutterBottom
        >
          CUPINS? NÓS TEMOS A SOLUÇÃO DEFINITIVA
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: 14, sm: 18, md: 24 } }}>
          Atendemos 24h toda POA e Região Metropolitana
        </Typography>
      </Box>
    </Card>
  );
}
