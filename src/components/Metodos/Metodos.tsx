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
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // Largura 100% em telas pequenas e 50% em telas maiores
        gap: 2,
        width: "100%",
        padding: "20px",
        alignItems: "center",
        bgcolor: "#F5811F",
        height: "auto", // Ajusta a altura de acordo com o conteúdo
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
          color: "white",
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          MÉTODOS DE CONTROLE DE CUPINS
        </Typography>

        {/* Lista de Métodos */}
        {[
          {
            title: "RASPAGEM",
            description:
              "Remoção mecânica das partes infestadas, eliminando colônias visíveis e impedindo a propagação. Ideal para pequenos focos em móveis e estruturas de madeira",
          },
          {
            title: "INJEÇÃO",
            description:
              "Inseticidas são aplicados diretamente dentro das galerias dos cupins de madeira seca, garantindo a eliminação da colônia",
          },
          {
            title: "PULVERIZAÇÃO",
            description:
              "Criação de uma camada protetora sobre superfícies vulneráveis, evitando infestações e interrompendo o ciclo de vida dos cupins",
          },
          {
            title: "BARREIRA QUÍMICA",
            description:
              "Proteção contra cupins subterrâneos, criando um bloqueio químico no solo para evitar que a praga atinja a estrutura",
          },
        ].map((method, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Quicksand', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                marginTop: "5px",
              }}
            >
              <strong>{method.title}</strong> - {method.description}
            </Typography>
          </Box>
        ))}
      </Grid2>
    </Grid2>
  );
}
