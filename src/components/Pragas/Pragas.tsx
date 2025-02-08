import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

export function Pragas() {
  const servicos = [
    {
      titulo: "ROEDORES",
      descricao:
        "Ratos são um perigo! Nossa desratização elimina o problema de forma rápida e segura",
      icone: "https://img.icons8.com/ink/96/8f8f8f/mouse-animal.png",
    },
    {
      titulo: "FORMIGAS",
      descricao:
        "Eliminamos colônias inteiras com dedetização profissional e barreiras preventivas",
      icone: "https://img.icons8.com/ios-filled/100/8f8f8f/ant.png",
    },
    {
      titulo: "BARATAS",
      descricao:
        "Nossa dedetização especializada elimina a infestação com pulverização segura",
      icone: "https://img.icons8.com/ios-filled/100/8f8f8f/cockroach.png",
    },
    {
      titulo: "MOSQUITOS E PERNILONGOS",
      descricao:
        "Nossa nebulização eficaz elimina focos e cria barreiras protetoras contra esses insetos",
      icone: "https://img.icons8.com/ios-filled/100/8f8f8f/mosquito.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        my: 5,
      }}
    >
      <Grid2 sx={{ marginLeft: "30px", marginRight: "30px" }}>
        {/* Títulos */}
        <Typography
          variant="h3"
          sx={{
            fontSize: 40,
            fontWeight: 400,
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          CONTROLE DE OUTRAS PRAGAS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: 30,
            fontWeight: 400,
            color: "rgb(245, 130, 31)",
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          Mais segurança, menos preocupações
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: 800,
            mt: 1,
            fontSize: 15,
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          Não deixe as pragas tomarem conta! Cuidamos da sua casa e empresa com
          métodos seguros e eficientes
        </Typography>
      </Grid2>

      {/* Grid2 Responsivo */}
      <Grid2 container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {servicos.map(({ titulo, descricao, icone }, index) => (
          <Grid2 key={index} display="flex" justifyContent="center">
            <Card
              sx={{
                width: 280,
                minHeight: 280,
                p: 3,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <img
                src={icone}
                alt={titulo}
                style={{ width: 80, height: 80, margin: "0 auto" }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: 14,
                    fontFamily: "Quicksand, sans-serif",
                  }}
                >
                  {titulo}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: 13,
                    fontFamily: "Quicksand, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
