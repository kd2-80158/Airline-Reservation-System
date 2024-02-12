package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@NoArgsConstructor
@Getter
@Setter
public class Airplane extends BaseEntity{
	
	@Column(length = 30)
	private String model;
	@Column(length = 10)
	private int noOfSeats;

}
