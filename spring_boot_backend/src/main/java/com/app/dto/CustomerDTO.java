package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class CustomerDTO
{
	
	@JsonProperty(access = Access.READ_ONLY)  // used during serialization
	private Long id;
	
	@NotBlank
	private String firstName;
	
	@NotBlank
	private String lastName;
	
	@Email
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY) // deserialize
	private String password;
	
	@JsonProperty(access = Access.WRITE_ONLY) 
	private String confirmPassword;
	
	@NotBlank
	private String mobileNo;
	
	
	private String gender;
	
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate dateOfBirth;
	
}
