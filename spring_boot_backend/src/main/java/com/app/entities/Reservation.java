package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Reservation extends BaseEntity
{
	
	private int reservationId;
	private String flightId;
	private int noOfSeats;
	private LocalDate reservationDate;
	private double totalPrice;
	@Enumerated(EnumType.STRING)
	private Class classId;
	
	
}
