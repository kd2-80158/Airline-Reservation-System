package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Flight;
import com.app.entities.PaymentStatus;

import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReservationDTO {
	
	
    private LocalDate reservationDate;
	
	private double totalPrice;
	
	private Long userId;
	
	private String flightid;

	@JsonProperty(access = Access.READ_ONLY) 
	private PaymentStatus pStatus=PaymentStatus.NA;
}
