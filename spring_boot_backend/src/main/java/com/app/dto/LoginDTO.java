package com.app.dto;

import javax.validation.constraints.Email;

import com.app.entities.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginDTO {
	
	
	@Email
	private String email;
	
	@JsonProperty(access = Access.WRITE_ONLY) // serialize
	private String password;
	
	@JsonProperty(access = Access.READ_ONLY) 
	private Role role=Role.CUSTOMER;

}
