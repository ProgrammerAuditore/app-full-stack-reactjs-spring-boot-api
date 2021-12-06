import React, { Component } from "react";

class FooterComponente extends Component {
  render() {
    return (
      <div>
        <footer className="text-center footer-style">
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-col"></div>
              <div className="col-md-4 footer-col">
                <h3>Acerca de</h3>
                <ul className="list-inline">
                  <li>Todo los derechos reservados 2021</li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/ProgrammerAuditore"
                      className="btn-social btn-outline"
                      rel="noreferrer"
                    >
                      <i className="fa fa-github"></i> ProgrammerAuditore
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-col"></div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponente;
