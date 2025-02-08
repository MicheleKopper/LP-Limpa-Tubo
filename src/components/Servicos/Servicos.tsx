import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

import { Business, Factory } from "@mui/icons-material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export function Servicos() {
  const servicos = [
    {
      titulo: "DESCUPINIZAÇÃO RESIDENCIAL",
      descricao:
        "Proteção completa para sua casa, incluindo móveis, pisos, portas e vigas de madeira",
      icone: "https://img.icons8.com/glyph-neue/100/8f8f8f/ant.png",
    },
    {
      titulo: "DESCUPINIZAÇÃO COMERCIAL",
      descricao:
        "Soluções para empresas, escritórios e comércios, evitando prejuízos com infestações",
      icone: <Business sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />,
    },
    {
      titulo: "DESCUPINIZAÇÃO INDUSTRIAL",
      descricao:
        "Proteção eficaz para indústrias e estoques, garantindo a integridade das estruturas",
      icone: <Factory sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />,
    },
    {
      titulo: "TRATAMENTO PREVENTIVO",
      descricao:
        "Métodos modernos para evitar infestações antes que elas comecem",
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
        my: 5,
      }}
    >
      <Grid2 sx={{marginLeft:"30px", marginRight:"30px"}}>
        <Typography
          variant="h3"
          sx={{
            fontSize: 40,
            fontWeight: 400,
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          DESCUPINIZAÇÃO
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
          Soluções eficazes contra cupins
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: 800,
            mt: 1,
            fontSize: 15,
            fontFamily: "Quicksand, sans-serif",
            lineHeight: 1.5,
          }}
        >
          A <strong>Limpa Tubo</strong> oferece descupinização especializada e
          preventiva para ambientes residenciais, comerciais, industriais e
          condomínios, utilizando métodos seguros para proteger sua estrutura,
          móveis e até estabelecimentos do setor de food services contra
          infestações de cupins.
        </Typography>
      </Grid2>

      <Grid2 container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {servicos.map(({ titulo, descricao, icone }, index) => (
          <Grid2
            key={index}
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                {typeof icone === "string" ? (
                  <img
                    src={icone}
                    alt={titulo}
                    style={{ width: 80, height: 80 }}
                  />
                ) : (
                  icone
                )}
              </Box>
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 800,
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
