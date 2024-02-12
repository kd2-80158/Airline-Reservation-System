package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@ToString
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
	
	
	
}
