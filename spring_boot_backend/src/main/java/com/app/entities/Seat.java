package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "seats")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Seat extends BaseEntity {
	
	// insert flight id here
//	@OneToOne(cascade = CascadeType.ALL)
//	private Flight flightId;
	@Column(length = 30)
	private double price;
	@Enumerated(EnumType.STRING)
	@Column(name = "seat_class", length = 10)
	private Class seatClass;
	@Column(length = 10)
	private boolean isOccupied;

}
