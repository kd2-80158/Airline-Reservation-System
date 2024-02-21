package com.app.service;

import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;

public interface AddressService {

	ApiResponse addAddress(@NotNull Long usersId, @Valid AddressDTO address);

	AddressDTO getAddressDetails(Long addressId);

	ApiResponse updateAddress( Long usersId, @Valid AddressDTO address);

	AddressDTO patchEmpAddress(@NotNull Long usersId, Map<String, Object> map);

}
