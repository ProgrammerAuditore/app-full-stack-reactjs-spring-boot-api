package com.github.programmerauditore.springapi.controllers;

import com.github.programmerauditore.springapi.repositories.EmpleadoRepository;

import java.util.List;

import com.github.programmerauditore.springapi.exception.ResourceNotFoundException;
import com.github.programmerauditore.springapi.models.EmpleadoModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmpleadoController {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    // obtener todo los empleados
    @GetMapping( path = "/empleados" )
    public List<EmpleadoModel> getAllEmpleados(){
        return empleadoRepository.findAll();
    }

    // crear un empleado
    @PostMapping( path = "/empleados")
    public EmpleadoModel createEmpleado(@RequestBody EmpleadoModel empleado){
        return empleadoRepository.save(empleado);
    }

    // obtener empleado por id
    @GetMapping( path = "/empleados/{id}")
    public ResponseEntity<EmpleadoModel> getEmpleadoPorId(@PathVariable Long id){

        // Buscar el empleado o recibir un error
        EmpleadoModel empleado = empleadoRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Empleado no registrado."));

        return ResponseEntity.ok(empleado);
    }

}   
