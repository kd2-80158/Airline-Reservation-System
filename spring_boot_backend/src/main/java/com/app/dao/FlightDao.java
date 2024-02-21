package com.app.dao;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.dto.FlightDTO;
import com.app.entities.Flight;
import com.app.entities.Location;

@Repository
public interface FlightDao extends JpaRepository<Flight, String> {

	Set<Flight> findByDepartureLocationIdAndArrivalLocationId(Location departureLocation, Location arrivalLocation);

}
