import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  </StrictMode>
);
