import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@vitorandradecoelho/sd-components/dist/style.css";

createRoot(document.getElementById("root")!).render(<App />);
