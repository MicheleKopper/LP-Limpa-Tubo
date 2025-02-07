import { Business, Factory } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";


export function Servicos() {
  const serviços = [
    {
      titulo: "DESCUPINIZAÇÃO RESIDENCIAL",
      descricao:
        "Proteção completa para sua casa, incluindo móveis, pisos, portas e vigas de madeira.",
      icone: (
        <img
          src="https://img.icons8.com/glyph-neue/100/8f8f8f/ant.png"
          alt="Cupim"
          style={{ width: "80px", height: "80px" }}
        />
      ),
    },
    {
      titulo: "DESCUPINIZAÇÃO COMERCIAL",
      descricao:
        "Soluções para empresas, escritórios e comércios, evitando prejuízos com infestações.",
      icone: <Business sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />,
    },
    {
      titulo: "DESCUPINIZAÇÃO INDUSTRIAL",
      descricao:
        "Proteção eficaz para indústrias e estoques, garantindo a integridade das estruturas.",
      icone: <Factory sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />,
    },
    {
      titulo: "TRATAMENTO PREVENTIVO",
      descricao:
        "Métodos modernos para evitar infestações antes que elas comecem.",
      icone: (
        <VerifiedUserIcon sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />
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
        DESCUPINIZAÇÃO
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
        Soluções eficazes contra cupins
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
        A <strong>Limpa Tubo</strong> oferece descupinização especializada e
        preventiva para ambientes residenciais, comerciais, industriais e
        condomínios, utilizando métodos seguros para proteger sua estrutura,
        móveis e até estabelecimentos do setor de food services contra
        infestações de cupins.
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
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: 14,
                    fontWeight: 800,
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
