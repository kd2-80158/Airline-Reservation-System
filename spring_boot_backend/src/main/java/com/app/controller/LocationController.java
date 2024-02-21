package com.app.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FlightDTO;
import com.app.entities.Location;
import com.app.service.LocationService;

@RestController
@RequestMapping("/location")
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {
	
	@Autowired
	private LocationService lService;
	
	@GetMapping("/findAll")
	public List<Location> getAllLocationCity()
	{
		return lService.getAllLocationCity();
	}

	@GetMapping("/find/{departureCity}/{arrivalCity}")
	public ResponseEntity<?> findFlightsBetweenCities(@PathVariable String departureCity, @PathVariable String arrivalCity) {
		Set<FlightDTO> flights = lService.findFlightByCities(departureCity, arrivalCity);
	    System.out.println(flights);
	    if (!flights.isEmpty()) {
	        return ResponseEntity.ok(flights);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No flight found between the given cities.");
	    }
	}


}
