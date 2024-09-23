import { FC, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./App";
import PageServicos from "./pages/servicos/page";
import PageObras from "./pages/obras/page";
import PageSobre from "./pages/sobre/page";
import PageContato from "./pages/contato/page";

interface MainRoutesProps {
  children: ReactNode;
}

export const MainRoutes: FC<MainRoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<PageServicos />} />
        <Route path="/obras" element={<PageObras />} />
        <Route path="/sobre" element={<PageSobre />} />
        <Route path="/contato" element={<PageContato />} />
      </Routes>
    </BrowserRouter>
  );
};
