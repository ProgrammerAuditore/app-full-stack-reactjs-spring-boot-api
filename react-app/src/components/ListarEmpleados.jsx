import React, { Component } from 'react';
import EmpleadoService from '../services/EmpleadoService';

class ListarEmpleados extends Component{

    constructor(props){
        super(props);

        this.state = {
            empleados : []
        }
    }

    componentDidMount(){
        EmpleadoService.getEmpleados()
        .then((res) => {
            this.setState({ empleados : res.data });
        });
    }

    render(){
        return (<div>
            <h2 className="text-center">Lista de empleados</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Puesto</th>
                            <th>Email</th>
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