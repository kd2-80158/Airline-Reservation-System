package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User extends BaseEntity 
{
	@Column(length = 30)
	private String firstName;
	
	@Column(length = 30)
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Column(length = 30,  unique = true)
	private String mobileNo;
	
	@Column(length = 30)
	private String gender;
	
	@Column(length = 30)
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate dateOfBirth;
	
	
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role", length = 10)
	private Role role=Role.CUSTOMER;
	
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true /* , fetch = FetchType.EAGER */ )
	private List<Reservation> reservation = new ArrayList<>();
	
	public void addReservation(Reservation r) {
		reservation.add(r);// dept --> emp
		r.setUser(this);// emp --> dept
	}
	public void removeEmployee(Reservation r) {
		reservation.remove(r);
		r.setUser(null);
	}
	
}
