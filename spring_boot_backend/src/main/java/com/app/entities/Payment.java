package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="payment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Payment extends BaseEntity{
	
	
	private LocalDateTime paymentDateTime;
	
	private double amount;
	
	@OneToOne
	@JoinColumn(name="booking_id",nullable=false)
	private Reservation bookingId;
	
	private PaymentMethod pMethod=PaymentMethod.VISA;
	
}
