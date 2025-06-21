import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home.page";
import VehiculePage from "./pages/Vehicule.page";
import HeroText from "./pages/Herotext";
import FehlingSimulation from "./pages/Fehling.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gsp-to" element={<VehiculePage />} />
        <Route path="/hero-txt" element={<HeroText />} />
        <Route path="/fehling-simulation" element={<FehlingSimulation />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
