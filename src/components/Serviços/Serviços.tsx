import {
  Business,
  Factory,
  HomeRepairService,
  Shield,
} from "@mui/icons-material";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

export function Serviços() {
  const serviços = [
    {
      titulo: "DESCUPINIZAÇÃO RESIDENCIAL",
      descricao:
        "Proteção completa para sua casa, incluindo móveis, pisos, portas e vigas de madeira.",
      icone: (
        <HomeRepairService
          sx={{ color: "rgb(143, 143, 143)", width: "auto", height: "120px"}}
        />
      ),
    },
    {
      titulo: "DESCUPINIZAÇÃO COMERCIAL",
      descricao:
        "Soluções para empresas, escritórios e comércios, evitando prejuízos com infestações.",
      icone: (
        <Business
          sx={{ color: "rgb(143, 143, 143)", width: "auto", height: "120px" }}
        />
      ),
    },
    {
      titulo: "DESCUPINIZAÇÃO INDUSTRIAL",
      descricao:
        "Proteção eficaz para indústrias e estoques, garantindo a integridade das estruturas.",
      icone: (
        <Factory
          sx={{ color: "rgb(143, 143, 143)", width: "auto", height: "120px" }}
        />
      ),
    },
    {
      titulo: "TRATAMENTO PREVENTIVO",
      descricao:
        "Métodos modernos para evitar infestações antes que elas comecem.",
      icone: (
        <Shield
          sx={{ color: "rgb(143, 143, 143)", width: "auto", height: "120px" }}
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
        margin: "50px",
        textAlign: "center",
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

      {/* Cards */}

      <Grid2
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        {serviços.map((serviço, index) => (
          <Card
            key={index}
            sx={{
              width: "280px",
              height: "300px",
              padding: "20px",
              textAlign: "center",
              borderRadius: "16px",
              boxShadow: 3,
              
            }}
          >
            <Box>{serviço.icone}</Box>
            <CardContent>
              <Typography variant="body1" sx={{ marginBottom: "8px" }}>
                {serviço.titulo}
              </Typography>
              <Typography variant="subtitle2">{serviço.descricao}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid2>
    </Box>
  );
}
