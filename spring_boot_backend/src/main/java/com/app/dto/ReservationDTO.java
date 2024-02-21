package com.app.dto;

import java.time.LocalDate;

import com.app.entities.PaymentStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReservationDTO {
	
    @JsonProperty(access = Access.READ_ONLY)
	private Long Id;
	
	private LocalDate reservationDate;
	
	private double totalPrice;
	
	private Long usersId;
	
	private String flightId;

	@JsonProperty(access = Access.READ_ONLY) 
	private PaymentStatus paymentStatus=PaymentStatus.NA;
	
}
