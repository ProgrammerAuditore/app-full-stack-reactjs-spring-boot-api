import ListarEmpleados from "./components/ListarEmpleados";
import HeaderComponente from "./components/HeaderComponente";
import FooterComponente from "./components/FooterComponente";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hola mundo, react JS</h1>
      <HeaderComponente></HeaderComponente>
      <ListarEmpleados></ListarEmpleados>
      <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
