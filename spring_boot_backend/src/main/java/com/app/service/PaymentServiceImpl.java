package com.app.service;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.PaymentDao;
import com.app.dao.ReservationDao;
import com.app.dto.PaymentDTO;
import com.app.entities.Address;
import com.app.entities.Payment;
import com.app.entities.PaymentStatus;
import com.app.entities.Reservation;

@Service
@Transactional
public class PaymentServiceImpl  implements PaymentService {
	
	@Autowired
	private ReservationDao rDao;
	
	@Autowired
	private PaymentDao pDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public PaymentDTO addPayment(@NotNull Long reservationId, @Valid PaymentDTO payment) {
		
		Reservation reservation = rDao.findById(reservationId).orElseThrow(() -> new ApiException("Reservation not found"));
			Payment persistentEntity = mapper.map(payment,Payment.class);
			pDao.save(persistentEntity);
			reservation.setPaymentStatus(PaymentStatus.COMPLETED);
		return mapper.map(persistentEntity, PaymentDTO.class);
	}

}
