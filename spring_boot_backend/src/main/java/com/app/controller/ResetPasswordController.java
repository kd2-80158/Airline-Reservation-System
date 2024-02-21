package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResetPasswordDTO;
import com.app.service.ResetPasswordService;

@RestController
@RequestMapping("/reset-password")
@CrossOrigin(origins = "http://localhost:3000")
public class ResetPasswordController 
{
	@Autowired
	private ResetPasswordService rService;
	
	@PostMapping
	public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordDTO rDto)
	{
		System.out.println("inside reset controller:"+rDto);
		 boolean resetSuccessful = rService.resetPassword(rDto.getEmail(),rDto.getNewPassword());
	        if (resetSuccessful) {
	            return ResponseEntity.ok("Password reset email sent successfully");
	        } else {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to reset password");
	        }
	}
	
	
}
