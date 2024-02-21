package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.entities.Seat;
import com.app.entities.SeatClass;

public interface SeatService {

	List<Seat> getAllSeats();

	double getBasePrice(SeatClass seatClass);

	Seat addNewSeat(Seat seat);

}
