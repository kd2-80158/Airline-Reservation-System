package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "seats")
@NoArgsConstructor

@Getter
@Setter
public class Seats extends BaseEntity {
	
	// insert flight id here
	@Column(length = 30)
	private double price;
	@Column(length = 10)
	private char seatClass;
	@Column(length = 10)
	private boolean isOccupied;

}
