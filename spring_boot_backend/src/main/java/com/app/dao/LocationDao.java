package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Flight;
import com.app.entities.Location;

@Repository
public interface LocationDao extends JpaRepository<Location, Long> {

	Location findByCity(String departureCity);


}
