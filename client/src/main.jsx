import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EnergyProvider } from "./EnergyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <EnergyProvider>
        <App />
      </EnergyProvider>
    </BrowserRouter>
  </StrictMode>,
);
