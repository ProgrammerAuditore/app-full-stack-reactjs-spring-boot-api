import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmpleadoService from "../services/EmpleadoService";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

// React Hooks
function VistaEmpleado() {
  const { id } = useParams();

  const [empleado, setEmpleado] = useState({
    id: id,
    nombre: "",
    puesto: "",
    email: "",
  });

  useEffect(() => {
    EmpleadoService.getEmpleado(id)
      .then((resp) => {
        let detalleEmpleado = resp.data;
        setEmpleado(detalleEmpleado);
      })
      .catch((resp) => {
        window.location.href = "/empleados";
      });
  }, [id]);

  const fncEliminarEmpleado = () => {
    const resp = window.confirm(
      "¿Seguro que desear eliminar al empleado actual?"
    );
    if (!resp) return null;

    EmpleadoService.deleteEmpleado(empleado.id)
      .then((resp) => {
        alert("Empleado eliminado exitosamente.");
      })
      .catch((resp) => {
        alert("Empleado no elimindo, ocurrio un error en el servidor :'( .");
      });

    window.location.href = "/empleados";
  };

  return (
    <div>
      <Row>
        <Col md={8} className="mx-auto">
          <Card style={{ marginTop: "8vh" }}>
            <Card.Header className="h4">
              <Stack direction="horizontal" gap={3}>
                <h4>{empleado.nombre}</h4>
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
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNombreCompleto">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={empleado.nombre}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPuesto">
                  <Form.Label>Puesto</Form.Label>
                  <Form.Control
                    type="text"
                    name="puesto"
                    value={empleado.puesto}
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={empleado.email}
                  />
                </Form.Group>
                <Link
                  className="btn btn-warning btn-sm"
                  role="button"
                  to={`/empleados/actualizar/${empleado.id}`}
                >
                  Editar
                </Link>{" "}
                <Button
                  onClick={fncEliminarEmpleado}
                  variant="danger"
                  size="sm"
                >
                  Eliminar
                </Button>{" "}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default VistaEmpleado;
