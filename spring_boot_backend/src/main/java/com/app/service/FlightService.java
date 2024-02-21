package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.app.dto.ApiResponse;
import com.app.dto.FlightDTO;
import com.app.entities.Flight;
import com.app.entities.Location;

public interface FlightService {

	List<FlightDTO> findAllFights();

	FlightDTO findFlightById(String id);

	FlightDTO addNewFlight(FlightDTO fdto);

	FlightDTO updateFlightDetails(String id, FlightDTO fdto);

    ApiResponse deleteFlightDetails(String id);

	Set<Flight> findByDepartureLocationIdAndArrivalLocationId(Location departureLocation, Location arrivalLocation);

}
