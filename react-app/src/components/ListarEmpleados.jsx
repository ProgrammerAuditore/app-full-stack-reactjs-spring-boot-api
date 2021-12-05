import React, { Component } from 'react';
import EmpleadoService from '../services/EmpleadoService';
import { Link, Outlet } from 'react-router-dom';

class ListarEmpleados extends Component{

    constructor(props){
        super(props);

        this.state = {
            empleados : []
        }

        this.fncRegistrarEmpleado = this.fncRegistrarEmpleado.bind(this);
    }

    componentDidMount(){
        EmpleadoService.getEmpleados()
        .then((res) => {
            this.setState({ empleados : res.data });
        });
    }

    fncRegistrarEmpleado(){
        this.props.history.push("/crear-empleado");
    }

    render(){
        return (<div>
            <h2 className="text-center">Lista de empleados</h2>
            
            {/* Un pequeño navegación */}
            <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link"  to="/crear-empleado">Crear empleado</Link>
            </li>
            </ul>
            <Outlet />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Puesto</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map( 
                            (empleado) => {
                                return <tr key={empleado.id}>
                                    <td>{empleado.id}</td>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.puesto}</td>
                                    <td>{empleado.email}</td>
                                    <td>
                                        <Link className="btn btn-warning" role="button" 
                                        to={`actualizar/${empleado.id}`}>
                                            Editar
                                        </Link>{" "}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default ListarEmpleados;