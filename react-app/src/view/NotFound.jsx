import React, { Component } from "react";
import HeaderComponente from "../components/HeaderComponente";
import FooterComponente from "../components/FooterComponente";

class NotFound extends Component {
  render() {
    return (
      <>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <div className="mt-4">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <div className="container">
                        <h1 className="display-4">Página no encontrado</h1>
                        <p className="lead">
                          Lo siento, el servidor no pudo encontrar el recurso solicitado.
                          Vuelve a interntarlo o intentelo más tarde.
                          </p>
                    </div>
                </div>
            </div>
        </div>
        <FooterComponente></FooterComponente>
      </>
    );
  }
}

export default NotFound;