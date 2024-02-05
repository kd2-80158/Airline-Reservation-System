package com.app.service;


import javax.validation.Valid;




import com.app.dto.CustomerDTO;


public interface CustomerService {

	// 1. add new customer
	CustomerDTO addNewEmployee(@Valid CustomerDTO dto);

}
