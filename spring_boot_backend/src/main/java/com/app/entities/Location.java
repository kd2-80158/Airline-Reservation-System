package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Location extends BaseEntity {
	
	@Column(length=30,unique=true)
	private String city;
	@Column(length=30)
	private String country;
	@Column(length=10, nullable=false)
	private int airportCode;
	
	public Location(String city) {
        this.city = city;
    }
	
}
