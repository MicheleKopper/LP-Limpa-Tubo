
import { Footer } from "../components/footer/Footer";
import { Banner } from "../components/Header/Banner";
import { Header } from "../components/Header/Header";
import { Servicos } from "../components/Servicos/Servicos";



export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Servicos />
     <Footer />
    </>
  );
}
