package com.app.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table
public class Address extends BaseEntity {
	
	@Column(name="city", length=30,nullable=false)
	private String city;
	@Column(name="pincode", length=6, nullable=false)
	private int pincode;
	@Column(nullable=false)
	private String state;
	@Column(nullable=false)
	private String country;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;

	public Address(String city, int pincode, String state, String country) {
		super();
		this.city = city;
		this.pincode = pincode;
		this.state = state;
		this.country = country;
	}
}
