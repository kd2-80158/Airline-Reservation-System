package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.FlightDao;
import com.app.dao.ReservationDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.ReservationDTO;
import com.app.entities.Flight;
import com.app.entities.PaymentStatus;
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
	

	@Override
	public ReservationDTO addNewBooking(ReservationDTO rdto) {
//		Long userId = (Long) httpsession.getAttribute("id");
//		User user = new User();
//		user.setId(userId);
//		System.out.println("User: "+user);
//		System.out.println("User id: "+userId);
		System.out.println("Reser service : "+ rdto);
		User user = uDao.findById(rdto.getUsersId()).orElseThrow(() -> new ApiException("User id not found"));
		Flight flight = fDao.findById(rdto.getFlightId()).orElseThrow(()-> new ApiException("flight id not found"));
		Reservation reservationEntity = mapper.map(rdto, Reservation.class);
		user.addReservation(reservationEntity);
		flight.addReservation(reservationEntity);
		System.out.println("ReserEntity : "+ reservationEntity);
//		reservationEntity.setUser(user);
		Reservation persistEntity = rDao.save(reservationEntity);
		return mapper.map(persistEntity, ReservationDTO.class);
	}
	@Override
	public ReservationDTO updateBooking(Long id, ReservationDTO rdto) {
		
		Reservation reservation = rDao.findById(id).orElseThrow(()-> new ApiException("No such reservation id found"));
		
		reservation.setReservationDate(rdto.getReservationDate());
		reservation.setPaymentStatus(rdto.getPaymentStatus());
		reservation.setTotalPrice(rdto.getTotalPrice());
	    return mapper.map(reservation, ReservationDTO.class);
	}
	@Override
	public ApiResponse deleteBooking(Long id) {
		Optional<Reservation> reservation = rDao.findById(id);
		if(reservation.isPresent())
		{
			System.out.println("inside if-statement of delete impl");
			rDao.delete(reservation.get());
		}
		return new ApiResponse("Reservation is deleted");
	}
    @Override
    public boolean updatePaymentStatus(Long reservationId) {
        // Find the reservation by its ID
        Reservation reservation = rDao.findById(reservationId).orElse(null);
        if (reservation != null) {
            // Update the payment status to "Completed"
        	reservation.setPaymentStatus(PaymentStatus.COMPLETED);
            // Save the updated reservation
            rDao.save(reservation);
            return true; // Return true indicating success
        }
        return false; // Return false indicating failure
    }
}
