import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Register from "./pages/Register";
import Craft from "./pages/Craft";
import Computing from "./pages/Computing";
import Aesthetic from "./pages/Aesthetic";
import Hostel from "./pages/Hostel";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/carreras" element={<Careers />} />
          <Route path="/servicios" element={<Hostel />} />
          <Route path="/artesania" element={<Craft />} />
          <Route path="/estetica" element={<Aesthetic />} />
          <Route path="/computacion" element={<Computing />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
