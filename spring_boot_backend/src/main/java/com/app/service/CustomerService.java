package com.app.service;


import javax.validation.Valid;

import org.springframework.http.ResponseEntity;

import com.app.dto.ApiResponse;
import com.app.dto.CustomerDTO;


public interface CustomerService {

	// 1. Add new customer
	CustomerDTO addNewEmployee(@Valid CustomerDTO dto);
	
	// 2. Delete Customer
	ApiResponse deleteCustDetails(Long custId);

	ApiResponse sendOtpToMailService(String email);

}
