package com.app.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Address {//extends BaseEntity {
	
	@Column(name="city", length=30,nullable=false)
	private String cityName;
	@Column(name="pincode", length=6, nullable=false, unique=true)
	private int pincode;
	@Column(nullable=false)
	private String state;
	@Column(nullable=false)
	private String country;
	
}
