package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Seat;
import com.app.entities.SeatClass;
import com.app.service.SeatService;

@RestController
@RequestMapping("/seat")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatController {
	
	@Autowired
	private SeatService seatService;
	

	    @GetMapping("/baseprice/{seatClass}")
	    public ResponseEntity<Double> getBasePrice(@PathVariable SeatClass seatClass) {
	    	System.out.println(seatClass);
	        double basePrice = seatService.getBasePrice(seatClass);
	        System.out.println("basePrice: "+basePrice);
	        return new ResponseEntity<>(basePrice, HttpStatus.OK);
	    }
	
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