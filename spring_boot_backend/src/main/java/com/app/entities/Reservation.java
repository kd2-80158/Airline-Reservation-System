package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="reservation")
@Getter
@Setter
@NoArgsConstructor

@AllArgsConstructor

public class Reservation extends BaseEntity
{

	private LocalDate reservationDate;
	
	private double totalPrice;

	
	@OneToOne
	@JoinColumn(name="user_id",nullable=false)
	private User user;
	
	private PaymentStatus pStatus=PaymentStatus.NOTCOMPLETED;
	

	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="flight_id")
	private Flight flight;
	
	//class
	@Enumerated(EnumType.STRING)
	@Column(name = "payment_status", length = 10)
	private PaymentStatus pStatus=PaymentStatus.NA;

	public Reservation(LocalDate reservationDate, double totalPrice, PaymentStatus pStatus) {
		super();
		this.reservationDate = reservationDate;
		this.totalPrice = totalPrice;
		this.pStatus = pStatus;
	}

	
}
