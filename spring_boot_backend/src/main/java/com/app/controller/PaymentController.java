package com.app.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentDTO;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

	
	@Autowired
	private PaymentService pService;
	
	
	@PostMapping("{reservationId}")
	public ResponseEntity<?> addPayment(@PathVariable @NotNull Long reservationId,
			@RequestBody @Valid PaymentDTO payment) {
		System.out.println("in assign adr " + reservationId + " " + payment);
		return ResponseEntity.status(HttpStatus.CREATED).body(pService.addPayment(reservationId, payment));
	}
}
