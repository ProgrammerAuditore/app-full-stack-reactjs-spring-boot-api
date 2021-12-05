import React, { Component } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

class HeaderComponente extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Empleados" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/empleados">
                        Listar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/crear-empleado">
                        Crear
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Reportar
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default HeaderComponente;
