import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListarEmpleados from "./components/ListarEmpleados";
import RegistrarEmpleado from "./components/RegistrarEmpleado";
import ActualizarEmpleado from "./components/ActualizarEmpleado";
import Layout from "./view/Layout";
import Home from "./view/Home";
import NotFound from "./view/NotFound";
import VistaEmpleado from "./components/VistaEmpleado";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="empleados" element={<Layout />}>
        <Route index element={<ListarEmpleados />} />
        <Route path="ver/:id" element={<VistaEmpleado />}></Route>
        <Route path="actualizar/:id" element={<ActualizarEmpleado />}></Route>
        <Route path="registrar" element={<RegistrarEmpleado />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
