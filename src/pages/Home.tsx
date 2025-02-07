
import { Footer } from "../components/Footer/Footer";
import { Banner } from "../components/Header/Banner";
import { Header } from "../components/Header/Header";
import { Metodos } from "../components/Metodos/Metodos";
import { Pragas } from "../components/Pragas/Pragas";
import { Servicos } from "../components/Servicos/Servicos";



export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Servicos />
      <Metodos/>
      <Pragas/>
     <Footer />
    </>
  );
}
