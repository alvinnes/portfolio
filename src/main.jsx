import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import ButtonNavProvider from "./context/ButtonNav.jsx";
import DetailProjectsPage from "./pages/detailProjectsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonNavProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailProjects" element={<DetailProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </ButtonNavProvider>
  </StrictMode>,
);
