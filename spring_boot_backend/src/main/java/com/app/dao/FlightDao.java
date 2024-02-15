package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Flight;

@Repository
public interface FlightDao extends JpaRepository<Flight, String> {

}
