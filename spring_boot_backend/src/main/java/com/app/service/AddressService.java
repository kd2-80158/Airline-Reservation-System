package com.app.service;

import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;

public interface AddressService {

	ApiResponse assignEmpAddress(@NotNull Long empId, @Valid AddressDTO address);

	AddressDTO getAddressDetails(Long addressId);

	ApiResponse updateEmpAddress( Long custId, @Valid AddressDTO address);

	AddressDTO patchEmpAddress(@NotNull Long custId, Map<String, Object> map);

}
