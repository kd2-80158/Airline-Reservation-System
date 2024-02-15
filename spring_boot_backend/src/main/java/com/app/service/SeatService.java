package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.entities.Seat;

public interface SeatService {

	List<Seat> getAllSeats();

	Seat addNewSeat(Seat seat);

}
