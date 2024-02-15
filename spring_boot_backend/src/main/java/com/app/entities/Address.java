package com.app.entities;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table
public class Address extends BaseEntity {
	
	@Column(name="city", length=30,nullable=false)
	private String cityName;
	@Column(name="pincode", length=6, nullable=false, unique=true)
	private int pincode;
	@Column(nullable=false)
	private String state;
	@Column(nullable=false)
	private String country;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name="user_id")
	private User user;

	public Address(String cityName, int pincode, String state, String country) {
		super();
		this.cityName = cityName;
		this.pincode = pincode;
		this.state = state;
		this.country = country;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
