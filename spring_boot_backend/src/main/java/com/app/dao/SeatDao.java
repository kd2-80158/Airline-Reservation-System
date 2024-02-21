package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Seat;
import com.app.entities.SeatClass;

@Repository
public interface SeatDao extends JpaRepository<Seat, Long>{

//	Seat findBySeatClass(SeatClass seatClass);

	Seat findBySeatClass(SeatClass name);



}
