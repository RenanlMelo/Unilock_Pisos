import { Header } from "./components/cabecalho/Cabecalho";
import { Footer } from "./components/footer/Footer";
import { Inicio } from "./components/inicio/Inicio";
import { Midia } from "./components/midia/Midia";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Inicio />
        <Midia />
        <Footer />
      </main>
    </>
  );
}
