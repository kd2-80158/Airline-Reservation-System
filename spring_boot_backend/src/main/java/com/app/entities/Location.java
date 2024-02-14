package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;

import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="location")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Location extends BaseEntity {
	

	@Column(length=30)
	private String city;
	@Column(length=30,unique=false)

	@Column(length=30, nullable=false, unique=true)
	private String city;
	@Column(length=30, nullable=false, unique=true)

	private String country;
	@Column(length=10, nullable=false, unique=true)
	private int airportCode;
	
	
	
}
