package com.app.service;


import javax.servlet.http.HttpSession;
import javax.validation.Valid;


import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;


public interface UserService {

	// 1. Add new customer
	UserDTO addNewUser(@Valid UserDTO dto);
	
	// 2. Delete Customer
	ApiResponse deleteUserDetails(Long custId);

	ApiResponse sendOtpToMailService(String email);

	ApiResponse checkLoginDetails(LoginDTO udto,HttpSession session);

	boolean isValidUser(String email, String password);

}
