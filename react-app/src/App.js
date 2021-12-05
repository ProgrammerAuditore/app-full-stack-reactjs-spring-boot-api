import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListarEmpleados from "./components/ListarEmpleados";
import HeaderComponente from "./components/HeaderComponente";
import FooterComponente from "./components/FooterComponente";
import CrearEmpleado from "./components/CrearEmpleado";

function App() {
  return (
    <div>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListarEmpleados/>}></Route>
            <Route path="/crear-empleado" element={<CrearEmpleado/>}></Route>
          </Routes>
        </div>
        <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
