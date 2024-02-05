package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="customer")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer extends BaseEntity 
{
	@Column(length = 30)
	private String firstName;
	
	@Column(length = 30)
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Column(length = 30,  unique = true)
	private String mobileNo;
	
	@Column(length = 30)
	private String gender;
	
	@Column(length = 30)
	@DateTimeFormat(pattern = "yyyy-mm-dd")
	private LocalDate dateOfBirth;
	
	@Column(nullable = false)
	private String password;
	
//	@Lob
//	private byte[] image;
//	private String imagePath;
	
}
