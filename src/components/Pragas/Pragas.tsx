import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export function Pragas() {
  const serviços = [
    {
      titulo: "ROEDORES",
      descricao:
        "Ratos são um perigo! Nossa desratização elimina o problema de forma rápida e segura.",
      icone: (
        <img
          src="https://img.icons8.com/ink/96/8f8f8f/mouse-animal.png"
          alt="Roedores"
          style={{ width: "80px", height: "80px" }}
        />
      ),
    },
    {
      titulo: "FORMIGAS",
      descricao:
        "Eliminamos colônias inteiras com dedetização profissional e barreiras preventivas.",
      icone: (
        <img
          src="https://img.icons8.com/ios-filled/100/8f8f8f/ant.png"
          alt="Formiga"
          style={{ width: "80px", height: "80px" }}
        />
      ),
    },
    {
      titulo: "BARATAS",
      descricao:
        "Nossa dedetização especializada elimina a infestação com pulverização segura.",
      icone: (
        <img
          src="https://img.icons8.com/ios-filled/100/8f8f8f/cockroach.png"
          alt="Barata"
          style={{ width: "80px", height: "80px" }}
        />
      ),
    },
    {
      titulo: "MOSQUITOS E PERNILONGOS",
      descricao:
        "Nossa nebulização eficaz elimina focos e cria barreiras protetoras contra esses insetos.",
      icone: (
        <img
          src="https://img.icons8.com/ios-filled/100/8f8f8f/mosquito.png"
          alt="Mosquitos e pernilongos"
          style={{ width: "80px", height: "80px" }}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "50px 20px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Quicksand', sans-serif",
          fontSize: 40,
          fontWeight: 400,
        }}
      >
        CONTROLE DE OUTRAS PRAGAS
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Quicksand', sans-serif",
          fontSize: 30,
          fontWeight: 400,
          color: "rgb(245, 130, 31)",
        }}
      >
        Mais segurança, menos preocupações
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: "800px",
          margin: "10px auto",
          fontFamily: "'Quicksand', sans-serif",
          fontSize: 15,
          fontWeight: 400,
        }}
      >
        Não deixe as pragas tomarem conta! Cuidamos da sua casa e empresa com
        métodos seguros e eficientes
      </Typography>

      {/* Grid Responsivo */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: "40px" }}
      >
        {serviços.map((serviço, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: "300px",
                minHeight: "280px",
                padding: "20px",
                textAlign: "center",
                borderRadius: "16px",
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <Box>{serviço.icone}</Box>
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 14,
                  }}
                >
                  {serviço.titulo}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  {serviço.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
