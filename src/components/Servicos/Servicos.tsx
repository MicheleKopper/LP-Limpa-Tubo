import {
  Business,
  Factory,
  HomeRepairService,
  Shield,
} from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export function Servicos() {
  const serviços = [
    {
      titulo: "DESCUPINIZAÇÃO RESIDENCIAL",
      descricao:
        "Proteção completa para sua casa, incluindo móveis, pisos, portas e vigas de madeira.",
      icone: (
        <HomeRepairService sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />
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
      icone: <Shield sx={{ color: "rgb(143, 143, 143)", fontSize: 80 }} />,
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
      <Typography variant="h3">NOSSOS SERVIÇOS</Typography>
      <Typography variant="h4">Soluções eficazes contra cupins</Typography>
      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: "800px",
          margin: "10px auto",
        }}
      >
        Com uma equipe especializada e métodos modernos, a{" "}
        <strong>Limpa Tubo</strong> oferece um serviço seguro e eficiente para
        eliminar e prevenir infestações de cupins, protegendo sua casa, empresa
        e móveis contra danos estruturais.
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
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {serviço.titulo}
                </Typography>
                <Typography variant="subtitle2">{serviço.descricao}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
