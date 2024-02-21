package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SeatDao;
import com.app.entities.Seat;
import com.app.entities.SeatClass;

@Service
@Transactional
public class SeatServiceImpl implements SeatService {
	
	@Autowired
	private SeatDao sDao;
	
	

	@Override
	public List<Seat> getAllSeats() {
		
		return sDao.findAll().stream().collect(Collectors.toList());
	}



	@Override
	public Seat addNewSeat(Seat seat) {
		
		return sDao.save(seat);
		
	}

	 @Override
	    public double getBasePrice(SeatClass seatClass) {
	        // Map the enum value to the corresponding string representation

	        // Fetch the seat by seat class name
	        Seat seat = sDao.findBySeatClass(seatClass);

	        if (seat != null) {
	            return seat.getPrice();
	        } else {
	            // Handle case where base price is not found
	            throw new RuntimeException("Base price not found for seat class: " + seatClass);
	        }
	    }

	
}
