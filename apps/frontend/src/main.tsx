import { createRoot } from "react-dom/client";
import "./design/index.css";
import App from "./App.tsx";
import { AppProviders } from "./app/providers/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
