import React, { Component } from "react";
import HeaderComponente from "../components/HeaderComponente";
import FooterComponente from "../components/FooterComponente";
import { Outlet } from "react-router";

class Main extends Component {
  render() {
    return (
      <>
        <HeaderComponente></HeaderComponente>
        <div className="container">
          <Outlet />
        </div>
        <FooterComponente></FooterComponente>
      </>
    );
  }
}

export default Main;
