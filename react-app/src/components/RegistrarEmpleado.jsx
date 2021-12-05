import React, { Component } from "react";
import { Form, Button, Card, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmpleadoService from "../services/EmpleadoService";
class RegistrarEmpleado extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empleado: {
        nombre: "",
        puesto: "",
        email: "",
      },
    };

    this.fncRegistrarEmpleado = this.fncRegistrarEmpleado.bind(this);
  }

  fncRegistrarEmpleado(event) {
    event.preventDefault();
    const empleado = JSON.stringify(this.state.empleado);

    EmpleadoService.createEmpleado(empleado)
    .then((resp) => {
      let nuevoEmpleado = resp.data;
      alert("Empleado registrado exitosamente.");
      window.location.href = `/empleados/ver/${nuevoEmpleado.id}`;
    })
    .catch((resp) => {
      alert("Empleado no creado. Hubo un error en el servidor.");
      window.location.href = "/empleados";
    });
  }

  fncEntradaDatos = (event) => {
    //const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      empleado: {
        ...this.state.empleado,
        [name]: value,
      },
    });

    console.log(event.target.name, event.target.value);
  };

  render() {
    return (
      <>
        <Row>
          <Col md={8} className="mx-auto">
            <Card style={{ marginTop: "8vh" }}>
              <Card.Header className="h4">
              <Stack direction="horizontal" gap={3}>
                <h4>Registrar empleado</h4>
                <div className="ms-auto"></div>
                <div>
                  <Link
                    className="btn btn-primary"
                    role="button"
                    to="/empleados"
                  >
                    Volver
                  </Link>{" "}
                </div>
              </Stack>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.fncRegistrarEmpleado}>
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
                      placeholder="Escribe el email"
                    />
                  </Form.Group>
                  <Button variant="primary" size="sm" type="submit">
                    Registrar empleado
                  </Button>{" "}
                  <Link className="btn btn-danger btn-sm" role="button" to="/empleados">
                    Cancelar
                  </Link>{" "}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default RegistrarEmpleado;
