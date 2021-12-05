import React, { Component } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";

class CrearEmpleado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empleado: {},
    };

    this.fncCrearEmpleado = this.fncCrearEmpleado.bind(this);
  }

  fncCrearEmpleado(event) {
    event.preventDefault();
    console.log("Creando un empleado...");
  }

  render() {
    return (
      <>
        <Row>
          <Col md={8} className="mx-auto">
            <Card style={{ marginTop: "8vh" }}>
              <Card.Header className="h4">Crear un empleado</Card.Header>
              <Card.Body>
                <Form onSubmit={this.fncCrearEmpleado}>
                  <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe el nombre"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPuesto">
                    <Form.Label>Puesto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe el puesto"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Escribe el email" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Crear empleado
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default CrearEmpleado;
