import { Header } from "../../components/cabecalho/Cabecalho";
import { Footer } from "../../components/footer/Footer";
import { Midia } from "../../components/midia/Midia";
import { About } from "../../components/sobre/Sobre";

export const metadata = {
  title: "Unilock Pisos | Sobre | Página explicativa sobre empresa",
  description: "Página com conteúdo informativo sobre a história da empresa",
};

export default function PageSobre() {
  return (
    <>
      <Header />
      <About />
      <Midia />
      <Footer />
    </>
  );
}
