import { createRoot } from "react-dom/client";
import { MainRoutes } from "./routes.tsx";
import MyApp from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <MainRoutes>
    <MyApp />
  </MainRoutes>
);
