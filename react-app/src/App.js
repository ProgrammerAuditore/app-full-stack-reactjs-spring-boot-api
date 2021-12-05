import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListarEmpleados from "./components/ListarEmpleados";
import HeaderComponente from "./components/HeaderComponente";
import FooterComponente from "./components/FooterComponente";

function App() {
  return (
    <div>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListarEmpleados/>}></Route>
          </Routes>
        </div>
        <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
