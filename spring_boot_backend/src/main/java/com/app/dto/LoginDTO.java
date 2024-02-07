package com.app.dto;

import javax.validation.constraints.Email;

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
	
	@JsonProperty(access = Access.READ_ONLY) // serialize
	private String password;

}
