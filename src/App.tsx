import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home.page";
import VehiculePage from "./pages/Vehicule.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gsp-to" element={<VehiculePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
