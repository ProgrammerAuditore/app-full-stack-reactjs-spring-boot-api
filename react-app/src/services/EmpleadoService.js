import axios from "axios";

const EMPLEADO_API_BASE_URL = "http://localhost:8080/api/v1/empleados"; 

class EmpleadoService {

    getEmpleados(){
        return axios.get(EMPLEADO_API_BASE_URL);
    }

}

export default new EmpleadoService;