import React, { useEffect, useState } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmpleadoService from "../services/EmpleadoService";
import { useParams } from "react-router";

function ActualizarEmpleado() {
  let { id } = useParams();

  const [empleado, setEmpleado] = useState({
    id: id,
    nombre: "",
    puesto: "",
    email: "",
  });

  
  useEffect( () => {
    EmpleadoService.getEmpleado(id).then((res) => {
        let getEmpleado = res.data;
        setEmpleado(getEmpleado);
    }).catch(() => {
        window.location.href = "/empleados";
    });

  }, [id]);

  const fncEntradaDatos = ({ target }) => {
    //const type = event.target.type;
    const name = target.name;
    const value = target.value;

    setEmpleado({
      ...empleado,
      [name]: value,
    });

    console.log(target.name, target.value);
  }

  const fncActualizarEmpleado= (event) => {
    event.preventDefault();

    EmpleadoService.updateEmpleado(empleado, empleado.id)
    .then((resp) => {
      console.log("Usuario actualizado.");
      window.location.href= `/empleados/ver/${empleado.id}`;
    })
    .catch((resp) => {
      console.log("Error, usuario no actualizado.");
    });
    
  }

  return (
    <>
      <Row>
        <Col md={8} className="mx-auto">
          <Card style={{ marginTop: "8vh" }}>
            <Card.Header className="h4">Actualizar un empleado</Card.Header>
            <Card.Body>
              <Form onSubmit={fncActualizarEmpleado}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={empleado.nombre}
                    onChange={fncEntradaDatos}
                    placeholder="Escribe el nombre"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPuesto">
                  <Form.Label>Puesto</Form.Label>
                  <Form.Control
                    type="text"
                    name="puesto"
                    value={empleado.puesto}
                    onChange={fncEntradaDatos}
                    placeholder="Escribe el puesto"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={empleado.email}
                    onChange={fncEntradaDatos}
                    placeholder="Escribe el email"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">
                  Actualizar empleado
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

export default ActualizarEmpleado;
