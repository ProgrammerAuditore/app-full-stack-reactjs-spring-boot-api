import ListarEmpleados from "./components/ListarEmpleados";
import HeaderComponente from "./components/HeaderComponente";
import FooterComponente from "./components/FooterComponente";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderComponente></HeaderComponente>
      <div className="container">
        <ListarEmpleados></ListarEmpleados>
      </div>
      <FooterComponente></FooterComponente>
    </div>
  );
}

export default App;
