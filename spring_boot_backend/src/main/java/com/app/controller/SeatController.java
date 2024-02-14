package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Seat;
import com.app.service.SeatService;

@RestController
@RequestMapping("/seat")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatController {
	
	@Autowired
	private SeatService seatService;
	
	@GetMapping
	public List<Seat> getAllSeats()
	{
		return seatService.getAllSeats();
	}
	
	@PostMapping
	public ResponseEntity<?> addNewSeat(@RequestBody Seat seat)
	{
		System.out.println("inside add new seat: "+seat);
		return ResponseEntity.ok(seatService.addNewSeat(seat));
	}

}
