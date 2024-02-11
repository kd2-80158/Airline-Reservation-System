package com.app.service;

import java.security.SecureRandom;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.dao.CustomerDao;
import com.app.dto.ApiResponse;
import com.app.dto.CustomerDTO;
import com.app.entities.User;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService 
{
	
	@Autowired
	private JavaMailSender javaMailSender;
	
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
			User custEntity = mapper.map(dto, User.class);
			User savedCustomer = custDao.save(custEntity);
			System.out.println("customer entity id" + custEntity.getId() + " " +savedCustomer.getId());;
			return mapper.map(savedCustomer, CustomerDTO.class);
		}
		throw new ApiException("Password don't match");
	}

	@Override
	public ApiResponse deleteCustDetails(Long custId) {


		return null;
	}

	@Override
	public ApiResponse sendOtpToMailService(String email) {
		String otp = generateOtp();
		System.out.println("OTp" + otp);
		
		try {
			sendOtpToMail(email,otp);
		} catch (MessagingException e) {
			throw new RuntimeException("Unable to send otp");
		}
		return null;
	}

	private void sendOtpToMail(String email, String otp) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
		messageHelper.setTo(email);
		messageHelper.setSubject("OTP is :");
		messageHelper.setText(otp);
		javaMailSender.send(mimeMessage);
		
	}

	private String generateOtp() {
		SecureRandom random = new SecureRandom();
		int otp = 100000 + random.nextInt(900000);
		return String.valueOf(otp);
	}

}
