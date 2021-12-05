package com.github.programmerauditore.springapi.controllers;

import com.github.programmerauditore.springapi.repositories.EmpleadoRepository;

import java.util.List;

import com.github.programmerauditore.springapi.models.EmpleadoModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmpleadoController {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    // obtener todo los empleados
    @GetMapping( path="/empleados" )
    public List<EmpleadoModel> getAllEmpleados(){
        return empleadoRepository.findAll();
    }

}
