import React, { Component } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";

class CrearEmpleado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empleado: {
        nombre:'',
        puesto: '',
        email: ''
      },
    };

    this.fncCrearEmpleado = this.fncCrearEmpleado.bind(this);
  }

  fncCrearEmpleado(event) {
    event.preventDefault();
    console.log("Creando un empleado...");
  }

  fncEntradaDatos = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      empleado:{
        ...this.state.empleado,
        [name] : value
      }
    });

    console.log(event.target.name, event.target.value);
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
                      name="nombre"
                      value={this.state.empleado.nombre}
                      onChange={this.fncEntradaDatos}
                      placeholder="Escribe el nombre"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPuesto">
                    <Form.Label>Puesto</Form.Label>
                    <Form.Control
                      type="text"
                      name="puesto"
                      value={this.state.empleado.puesto}
                      onChange={this.fncEntradaDatos}
                      placeholder="Escribe el puesto"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    value={this.state.empleado.email}
                    onChange={this.fncEntradaDatos}
                    placeholder="Escribe el email" />
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
