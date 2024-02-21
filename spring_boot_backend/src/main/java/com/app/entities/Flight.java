package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="flights")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Flight{
	
	//if i drop fetch type=lazy then there is no error in fetching flight details
	@Id
	private String flightId;	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="dept_loc_id")
	private Location departureLocationId;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="arr_loc_id")
	private Location arrivalLocationId;
	
	@Column(length=5,nullable=false)
	private int noOfSeats;
	
	@Column(length=30, nullable=false)
	private LocalDateTime departureTime;
	
	@Column(length=30, nullable=false)
	private LocalDateTime arrivalTime;
	
	@Column(length=30, nullable=false)
	private LocalDate departureDate;
	
	@Column(length=30)
	private LocalDate returnDate;
	//includes fetch type to eager when getting error of json mapping expection(for fetching only those flights
	//that matches the from and to location
	@OneToMany(mappedBy = "flight", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Reservation> reservation = new ArrayList<>();
	
	public void addReservation(Reservation r) {
		reservation.add(r);// dept --> emp
		r.setFlight(this);// emp --> dept
	}
	public void removeEmployee(Reservation r) {
		reservation.remove(r);
		r.setFlight(null);
	}
	
	
	
}
