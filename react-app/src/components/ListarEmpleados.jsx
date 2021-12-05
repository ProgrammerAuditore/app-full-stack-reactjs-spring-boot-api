import React, { Component } from 'react';

class ListarEmpleados extends Component{

    constructor(props){
        super(props);

        this.state = {
            empleados : []
        }
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
                        <tr>
                            <td>#1</td>
                            <td>Carlos</td>
                            <td>Desing</td>
                            <td>carlos@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default ListarEmpleados;