import React, { Component } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmpleadoService from "../services/EmpleadoService";
import { useParams } from "react-router";

class UpdateEmpleado extends Component {

  constructor(props) {
    super(props);

    this.state = {
      empleado: {
        nombre: "",
        puesto: "",
        email: "",
      },
    };

    this.fncEntradaDatos = this.fncEntradaDatos.bind(this);
  }

  fncEntradaDatos({target}){
    //const type = event.target.type;
    const name = target.name;
    const value = target.value;

    this.setState({
        empleado:{
            ...this.state.empleado,
            [name]: value,
        }
    });

    console.log(target.name, target.value);
  }

  componentDidMount(){
    console.log('Cargando datos de usuario...');
  }

  render() {
    return (
      <>
        <Row>
          <Col md={8} className="mx-auto">
            <Card style={{ marginTop: "8vh" }}>
              <Card.Header className="h4">Editar un empleado</Card.Header>
              <Card.Body>
                <Form>
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
                  <Button variant="primary" type="submit">
                    Crear empleado
                  </Button>{" "}
                  <Link className="btn btn-danger" role="button" to="/">
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

export default UpdateEmpleado;
