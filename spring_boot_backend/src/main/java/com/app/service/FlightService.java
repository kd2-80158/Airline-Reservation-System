package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.ApiResponse;
import com.app.dto.FlightDTO;

public interface FlightService {

	List<FlightDTO> findAllFights();

	FlightDTO findFlightById(String id);

	FlightDTO addNewFlight(FlightDTO fdto);

	FlightDTO updateFlightDetails(String id, FlightDTO fdto);

    ApiResponse deleteFlightDetails(String id);

}
