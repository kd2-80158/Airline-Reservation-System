package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.app.dto.FlightDTO;
import com.app.entities.Flight;
import com.app.entities.Location;

public interface LocationService {


	List<Location> getAllLocationCity();

	Set<FlightDTO> findFlightByCities(String departureCity, String arrivalCity);

}
