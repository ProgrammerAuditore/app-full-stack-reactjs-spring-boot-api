import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListarEmpleados from "./components/ListarEmpleados";
import CrearEmpleado from "./components/CrearEmpleado";
import EditarEmpleado from "./components/EditarEmpleado";
import Layout from "./view/Layout";
import Home from "./view/Home";
import NotFound from "./view/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="empleados" element={<Layout />}>
        <Route index element={<ListarEmpleados />} />
        <Route path="actualizar/:id" element={<EditarEmpleado />}></Route>
        <Route path="registrar" element={<CrearEmpleado />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
