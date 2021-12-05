import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListarEmpleados from "./components/ListarEmpleados";
import HeaderComponente from "./components/HeaderComponente";
import FooterComponente from "./components/FooterComponente";
import CrearEmpleado from "./components/CrearEmpleado";
import EditarEmpleado from "./components/EditarEmpleado";

function App() {
  return (
    <div>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListarEmpleados />}></Route>
            <Route path="/crear-empleado" element={<CrearEmpleado />}></Route>
            <Route path="/editar-empleado/:id" element={<EditarEmpleado />}></Route>
          </Routes>
        </div>
        <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
