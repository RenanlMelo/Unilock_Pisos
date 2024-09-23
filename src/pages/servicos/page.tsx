import { Header } from "../../components/cabecalho/Cabecalho";

import { ToTop } from "../../components/pTopo/ToTop";
import { Footer } from "../../components/footer/Footer";
import { Midia } from "../../components/midia/Midia";
import { Servicos } from "../../components/servicos/Servicos";

export const metadata = {
  title: "Unilock Pisos | Serviços | Página com modelos, cores e serviços",
  description: "Página com os serviços, modelos e cores dos pisos disponíveis",
};

export default function PageServicos() {
  return (
    <>
      <Header />
      <Servicos />
      <ToTop />
      <Midia />
      <Footer />
    </>
  );
}
