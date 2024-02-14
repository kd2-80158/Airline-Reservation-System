package com.app.service;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.FlightDao;
import com.app.dao.ReservationDao;
import com.app.dao.UserDao;
import com.app.dto.ReservationDTO;
import com.app.entities.Flight;
import com.app.entities.Reservation;
import com.app.entities.User;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
	
	@Autowired
	private ReservationDao rDao;
	
	@Autowired
	private UserDao uDao;
	
	@Autowired
	private FlightDao fDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private HttpSession httpsession;

	@Override
	public ReservationDTO addNewBooking(ReservationDTO rdto) {
//		Long userId = (Long) httpsession.getAttribute("id");
//		User user = new User();
//		user.setId(userId);
//		System.out.println("User: "+user);
//		System.out.println("User id: "+userId);
		System.out.println("Reser service : "+ rdto);
		User user = uDao.findById(rdto.getUserId()).orElseThrow(() -> new ApiException("User id not found"));
		Flight flight = fDao.findById(rdto.getFlightid()).orElseThrow(()-> new ApiException("flight id not found"));
		Reservation reservationEntity = mapper.map(rdto, Reservation.class);
		user.addReservation(reservationEntity);
		flight.addReservation(reservationEntity);
		System.out.println("ReserEntity : "+ reservationEntity);
//		reservationEntity.setUser(user);
		Reservation persistEntity = rDao.save(reservationEntity);
		return mapper.map(persistEntity, ReservationDTO.class);
	}

}
