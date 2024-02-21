package com.app.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OtpController {

	    // Store generated OTPs with associated phone numbers (in-memory storage for simplicity, use database in production)
	    private Map<String, String> otpMap = new HashMap<>();

	    @PostMapping("/send-otp")
	    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
	        String phoneNumber = request.get("phoneNumber");
	        String otp = generateOtp();
	        // Send the OTP to the user's phone number (via SMS, email, etc.)
	        otpMap.put(phoneNumber, otp); // Store the generated OTP
	        return ResponseEntity.ok("OTP sent successfully");
	    }

	    @PostMapping("/verify-otp")
	    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
	        String phoneNumber = request.get("phoneNumber");
	        String otp = request.get("otp");
	        if (otpMap.containsKey(phoneNumber) && otpMap.get(phoneNumber).equals(otp)) {
	            // OTP verification successful
	            return ResponseEntity.ok("OTP verification successful");
	        } else {
	            // Invalid OTP
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
	        }
	    }

	    private String generateOtp() {
	        // Generate a random 6-digit OTP
	        Random random = new Random();
	        int otp = 100000 + random.nextInt(900000);
	        return String.valueOf(otp);
	    }
	}

