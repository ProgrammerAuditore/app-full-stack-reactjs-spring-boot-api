import React, { Component } from "react";
import HeaderComponente from "../components/HeaderComponente";
import FooterComponente from "../components/FooterComponente";

class NotFound extends Component {
  render() {
    return (
      <>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <h1>Página no encontrado</h1>
        </div>
        <FooterComponente></FooterComponente>
      </>
    );
  }
}

export default NotFound;