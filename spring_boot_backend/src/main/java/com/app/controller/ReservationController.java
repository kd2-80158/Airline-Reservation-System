package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ReservationDTO;
import com.app.service.ReservationService;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservationController {

	@Autowired
	private ReservationService rService;
	
	//Add Booking
	@PostMapping
	public ResponseEntity<?> addNewBooking(@RequestBody ReservationDTO rdto)
	{
		System.out.println("Reserv Controller : "+rdto);
		return ResponseEntity.status(HttpStatus.CREATED).body(rService.addNewBooking(rdto));
	}
	
	
	//Update Booking
	//Cancel Booking
}
