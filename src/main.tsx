import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Tentativa de importar CSS da biblioteca
try {
  import("@vitorandradecoelho/sd-components/dist/style.css");
} catch (e) {
  console.log("CSS da biblioteca não encontrado");
}

createRoot(document.getElementById("root")!).render(<App />);
