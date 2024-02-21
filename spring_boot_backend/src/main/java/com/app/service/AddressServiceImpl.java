package com.app.service;

import java.util.Map;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.AddressDao;
import com.app.dao.UserDao;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;
import com.app.entities.Address;
import com.app.entities.User;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	
	@Autowired
	private UserDao uDao;
	
	@Autowired
	private AddressDao adrRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addAddress(@NotNull Long reservationId, @Valid AddressDTO address) {
		User user = uDao.findById(reservationId).
				orElseThrow(() -> new ApiException("Invalid customer"));
		Address addressEntity = mapper.map(address, Address.class);
		addressEntity.setUser(user);
		adrRepo.save(addressEntity);
		return new ApiResponse("Assigned new address to User , " + user.getFirstName());
	}

	@Override
	public AddressDTO getAddressDetails(Long addressId) {
		return mapper.map(
				adrRepo.findById(addressId).orElseThrow(
						() -> new ApiException("Invalid User  Id Or Address not yet assigned !!!!")),
				AddressDTO.class);
	}

	@Override
	public ApiResponse updateAddress(Long reservationId, @Valid AddressDTO address) {
		Address addressEntity = adrRepo.findById(reservationId)
				.orElseThrow(() -> new ApiException("Address is not yet assigned !!!! "));
	
		mapper.map(address, addressEntity);
		// save adr details
		adrRepo.save(addressEntity);
		return new ApiResponse("Updated address for  User ");
	}

	@Override
	public AddressDTO patchEmpAddress(@NotNull Long custId, Map<String, Object> map) {
		Address address = adrRepo.findById(custId)
				.orElseThrow(() -> new ApiException("Invalid Address Id!!!!"));
			
		mapper.map(map,address);
		
		System.out.println("updated address " + address);
		return mapper.map(address, AddressDTO.class);
	}

}
