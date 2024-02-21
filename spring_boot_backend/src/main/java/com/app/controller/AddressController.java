package com.app.controller;

import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressDTO;
import com.app.service.AddressService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/user/address/{usersId}")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	@Autowired
	private AddressService adrService;
	
	@PostMapping
	//@Operation(summary = "Assign Customer Address")
	public ResponseEntity<?> addAddress(@PathVariable @NotNull Long usersId,
			@RequestBody @Valid AddressDTO address) {
		System.out.println("in assign adr " + usersId + " " + address);
		return ResponseEntity.status(HttpStatus.CREATED).body(adrService.addAddress(usersId, address));
	}
	
	@GetMapping
	//@Operation(summary = "Get Customer address")
	public ResponseEntity<?> getAddress(@PathVariable Long usersId) {
		System.out.println("in get emp adr " + usersId);
		// one to one with shared PK => emp id is same as adr id
		return ResponseEntity.ok(adrService.getAddressDetails(usersId));
	}
	
	@PutMapping
	@Operation(summary = "Complete updation of employee address")
	public ResponseEntity<?> updateAddress(@PathVariable @NotNull Long usersId,
			@RequestBody @Valid AddressDTO address) {
		System.out.println("in complete update adr " + usersId + " " + address);
		return ResponseEntity.ok()
				.body(adrService.updateAddress(usersId, address));
	}
	@PatchMapping
	@Operation(summary = "Partial updation of employee address")
	public ResponseEntity<?> updateEmpAddressPartial(@PathVariable @NotNull Long reservationId,
			@RequestBody Map<String, Object> map) throws Exception{
		System.out.println("in partial update adr " + reservationId + " " + map);
		return ResponseEntity.ok()
				.body(adrService.patchEmpAddress(reservationId, map));
	}

}
