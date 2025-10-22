import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "light-eclipse", "dark", "dark-eclipse"]}
      enableSystem={false}
    >
      <App />
    </ThemeProvider>
  </StrictMode>
);
