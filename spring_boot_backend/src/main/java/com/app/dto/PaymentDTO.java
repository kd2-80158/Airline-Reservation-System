package com.app.dto;

import java.time.LocalDateTime;


import com.app.entities.PaymentMethod;
import com.app.entities.Reservation;

public class PaymentDTO {
	
 private LocalDateTime paymentDateTime;
	
 private double amount;

 private Long bookingId;
	
 private PaymentMethod pMethod=PaymentMethod.VISA;

}
