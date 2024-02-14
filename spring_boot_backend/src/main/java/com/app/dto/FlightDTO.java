package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.Location;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FlightDTO {

private String flightId;

@NotBlank
private Location departureLocationId;
	
@NotBlank
private Location arrivalLocationId;

@NotBlank
private int noOfSeats;

@NotBlank
private LocalDateTime departureTime;
	
@NotBlank
private LocalDateTime arrivalTime;

@NotBlank
@DateTimeFormat(pattern = "yyyy-mm-dd")
private LocalDate departureDate;

@NotBlank
@DateTimeFormat(pattern = "yyyy-mm-dd")
private LocalDate returnDate;
			
}

