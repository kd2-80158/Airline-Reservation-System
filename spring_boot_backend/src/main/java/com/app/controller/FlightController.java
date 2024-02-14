package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FlightDTO;
import com.app.service.FlightService;

@RestController
@RequestMapping("/flight")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {
	
	@Autowired
	private FlightService flightService;
	
	
	@GetMapping
	public List<FlightDTO> getAllFlights()
	{
		return flightService.findAllFights();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<FlightDTO> findFlightById(@PathVariable String id)
	{
		return ResponseEntity.ok(flightService.findFlightById(id));
	}
	
	@PostMapping
	public ResponseEntity<FlightDTO> addNewFlight(@RequestBody FlightDTO fdto)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(flightService.addNewFlight(fdto));
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateFlightDetails(@PathVariable String id, @RequestBody FlightDTO fdto)
	{
		return ResponseEntity.ok(flightService.updateFlightDetails(id,fdto));
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteFlightDetails(@PathVariable String id)
	{
		return ResponseEntity.ok(flightService.deleteFlightDetails(id));
	}
	
	

}
