package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SeatDao;
import com.app.entities.Seat;

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

	
}
