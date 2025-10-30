import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/queryClient.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />

      <Toaster
        position="top-right"
        gutter={0}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#37B56B",
              borderLeft: "10px solid #2BA05A",
              color: "white",
              fontWeight: "semi-bold",
            },
          },
          info: {
            duration: 3000,
            style: {
              backgroundColor: "#00A6F4",
              borderLeft: "10px solid #1447e6",
              color: "white",
              fontWeight: "semi-bold",
            },
          },
          error: {
            duration: 4000,
            style: {
              backgroundColor: "#ef4444",
              borderLeft: "10px solid #CC001F",
              color: "white",
              fontWeight: "semi-bold",
            },
          },
          style: {
            fontSize: "1rem",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
