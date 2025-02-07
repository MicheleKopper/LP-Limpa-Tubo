import { useState } from "react";
import { Box, IconButton, CardMedia, Grid2, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export function Metodos() {
  // Estado para controlar o índice da imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens do carrossel
  const images = ["cupim1.jpeg", "cupim2.jpeg", "cupim3.jpeg", "cupim4.jpeg"];

  // Função para mover para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Função para mover para a imagem seguinte
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Grid2
      container
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 2,
        width: "100%",
        padding: "20px",
        alignItems: "center",
        bgcolor: "#F5811F",
        height: "500px",
      }}
    >
      {/* Coluna da Imagem */}
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
            margin: "auto",
          }}
        >
          {/* Botão de navegação para imagem anterior */}
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              zIndex: 1,
            }}
          >
            <ArrowBack />
          </IconButton>

          {/* Imagem do carrossel */}
          <CardMedia
            component="img"
            image={`/${images[currentImageIndex]}`}
            alt={`Imagem ${currentImageIndex + 1}`}
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          {/* Botão de navegação para imagem seguinte */}
          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              zIndex: 1,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Grid2>

      {/* Coluna de Texto */}
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", color:"white"}}
        >
          Cupim de Madeira Seca (Cryptotermes brevis)
        </Typography>
        <Typography variant="body1">
          Entre insetos, os cupins são responsáveis por importante papel na
          decomposição de matéria orgânica, porém no perímetro urbano podem
          causar prejuízos irreparáveis. Sua alimentação é baseada na celulose,
          matéria-prima extraída da madeira aplicada a vários materiais. Logo,
          os cupins podem danificar livros, tecidos, os próprios artigos de
          madeira, entre outros. Além disso, os cupins multiplicam-se com
          facilidade e chegam a mais de 200 espécies catalogadas.
        </Typography>
      </Grid2>
    </Grid2>
  );
}
