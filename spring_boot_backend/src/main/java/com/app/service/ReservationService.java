package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.ReservationDTO;

public interface ReservationService {

	
	ReservationDTO addNewBooking(ReservationDTO rdto);

	ReservationDTO updateBooking(Long id, ReservationDTO rdto);

	ApiResponse deleteBooking(Long id);

	boolean updatePaymentStatus(Long reservationId);

}
