package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="reservation")
@Getter
@Setter
@NoArgsConstructor
public class Reservation extends BaseEntity
{

	private LocalDate reservationDate;
	
	private double totalPrice;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	//when i tried to change user to userId the retrieval of from and to in the frontend failed.
	private User user;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="flight_id")
	private Flight flight;
	
	//class
	@Enumerated(EnumType.STRING)
	@Column(name = "payment_status", length = 10)
	private PaymentStatus paymentStatus=PaymentStatus.NA;

//	public Reservation(LocalDate reservationDate, double totalPrice, PaymentStatus pStatus) {
//		super();
//		this.reservationDate = reservationDate;
//		this.totalPrice = totalPrice;
//		this.pStatus = pStatus;
//	}

	
	

	
}
