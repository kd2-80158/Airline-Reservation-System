package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Login extends BaseEntity 
{
 
	@Column(length=30,nullable=false)
	private String emailId;
	@Column(length=30,nullable=false)
	private String password;
}