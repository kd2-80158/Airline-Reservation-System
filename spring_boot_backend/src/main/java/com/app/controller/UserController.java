package com.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;


import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.service.UserService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	private UserService userService;


	// 1. Add new customer
	@PostMapping
	public ResponseEntity<?> addNewUser(@RequestBody @Valid UserDTO udto)
	{
		System.out.println(" in add customer" + udto);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addNewUser(udto));
	}
	
	// 2. Delete Customer
	@DeleteMapping("/{custId}")
	public ResponseEntity<?> deleteUser(@PathVariable Long userId)
	{
		System.out.println("in delete customer " + userId);
		return ResponseEntity.ok(userService.deleteUserDetails(userId));
	}

	@PostMapping("/login")
	public ResponseEntity<?> checkLoginDetails(@RequestBody LoginDTO udto, HttpSession session)
	{
		return ResponseEntity.ok(userService.checkLoginDetails(udto,session));
		
	}

	@PostMapping("/logout")
	public ResponseEntity<?> doLogout(HttpServletRequest request)
	{
		HttpSession session = request.getSession();
	
		if(session!=null)
		{
			session.invalidate();
			return ResponseEntity.ok("Logged out");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No active session");
		}
	}
	
	@PostMapping("/otpviaEmail")
	public ApiResponse sendOtpToEmail(@RequestBody String email)
	{
		return  userService.sendOtpToMailService(email);
	}

}
