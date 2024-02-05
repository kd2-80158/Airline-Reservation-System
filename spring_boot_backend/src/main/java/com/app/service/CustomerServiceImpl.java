package com.app.service;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.dao.CustomerDao;
import com.app.dto.CustomerDTO;
import com.app.entities.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService 
{
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CustomerDao custDao;

	@Override
	public CustomerDTO addNewEmployee(@Valid CustomerDTO dto) 
	{
		System.out.println("Service impl" + dto);
		if(dto.getPassword().equals(dto.getConfirmPassword()))
		{
			Customer custEntity = mapper.map(dto, Customer.class);
			Customer savedCustomer = custDao.save(custEntity);
			System.out.println("customer entity id" + custEntity.getId() + " " +savedCustomer.getId());;
			return mapper.map(savedCustomer, CustomerDTO.class);
		}
		throw new ApiException("Password don't match");
	}

}
