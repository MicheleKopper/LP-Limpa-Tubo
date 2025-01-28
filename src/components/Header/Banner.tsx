import { Card, CardMedia, Typography } from "@mui/material";

export function Banner() {
  return (
    <Card sx={{ width: "100vw" }}>
      <CardMedia
        sx={{ height: 300
         }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      >
        <Typography>Cupins? Nós Temos a Solução Definitiva!</Typography>
        <Typography>
          Acabe com os cupins e proteja seu patrimônio agora mesmo. A Limpa Tubo
          oferece um serviço rápido, seguro e 100% eficaz contra infestações.
        </Typography>
      </CardMedia>
    </Card>
  );
}
