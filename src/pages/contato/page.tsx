import { Header } from "../../components/cabecalho/Cabecalho";
import { Footer } from "../../components/footer/Footer";
import { Form } from "../../components/formulario/Formulario";
import { Midia } from "../../components/midia/Midia";

export const metadata = {
  title: "",
  description:
    "Página de contato destinado aos clientes, para que possam entrar em contato com o ",
};

export default function PageContato() {
  return (
    <>
      <Header />
      <Form />
      <Midia />
      <Footer />
    </>
  );
}
