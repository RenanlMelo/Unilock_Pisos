import { Header } from "../../components/cabecalho/Cabecalho";
import { Footer } from "../../components/footer/Footer";
import { Midia } from "../../components/midia/Midia";
import { Obras } from "../../components/obras/Obras";
import { ToTop } from "../../components/pTopo/ToTop";

export const metadata = {
  title: "Unilock Pisos | Obras | Página com obras feitas anteriormente",
  description:
    "Página com exemplos de obras feitas anteriormente, separados por modelos",
};

export default function PageObras() {
  return (
    <>
      <Header />
      <Obras />
      <Midia />
      <ToTop />
      <Footer />
    </>
  );
}
