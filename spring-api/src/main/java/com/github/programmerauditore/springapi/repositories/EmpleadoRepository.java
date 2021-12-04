package com.github.programmerauditore.springapi.repositories;

import com.github.programmerauditore.springapi.models.EmpleadoModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<EmpleadoModel, Long> {

}
