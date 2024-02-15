package com.app.service;

import java.security.SecureRandom;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService 
{
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserDao uDao;

	@Override
	public UserDTO addNewUser(@Valid UserDTO udto) 
	{
		System.out.println("Service impl" + udto);
		if(udto.getPassword().equals(udto.getConfirmPassword()))
		{
			User custEntity = mapper.map(udto, User.class);
			User savedUser = uDao.save(custEntity);
			System.out.println("customer entity id" + custEntity.getId() + " " +savedUser.getId());;
			return mapper.map(savedUser, UserDTO.class);
		}
		throw new ApiException("Password don't match");
	}

	@Override
	public ApiResponse deleteUserDetails(Long userId) {


		return null;
	}
	
	public boolean isValidUser(String email, String password) {
		     User user = uDao.getByEmail(email);
	        if (user != null && user.getPassword().equals(password)) {
	            return true;
	        }
	        return false;
	    }

	@Override
	public ApiResponse sendOtpToMailService(String email) {
        String otp = generateOtp();
        try {
            sendOtpToMail(email, otp);
            System.out.println("inside smtp: "+email+otp);
            return new ApiResponse("OTP has been sent to your email.");
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send OTP.");
        }
    }

    private void sendOtpToMail(String email, String otp) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);
        messageHelper.setTo(email);
        messageHelper.setSubject("Your OTP for verification");
        messageHelper.setText("Your OTP is: " + otp);
        javaMailSender.send(mimeMessage);
    }

    private String generateOtp() {
        SecureRandom random = new SecureRandom();
        int otpValue = 100000 + random.nextInt(900000);
        return String.valueOf(otpValue);
    }
	
	@Override
	public ApiResponse checkLoginDetails(LoginDTO cdto, HttpSession session) {
	{
			System.out.println("inside service impl    ");
			
			User user = uDao.getByEmail(cdto.getEmail());
			
			System.out.println("user : "+user);
			
			if(user==null)
				return new ApiResponse("Invalid Email and Password");
				
			if(cdto.getEmail().equals(user.getEmail()))
			{
				System.out.println("finds login");
				if(cdto.getPassword().equals(user.getPassword()))
				{
				   System.out.println("pswd match");
				   System.out.println("Role passed by DTO: "+cdto.getRole());
				   System.out.println("Role: "+user.getRole());
				   if(cdto.getRole().equals(user.getRole()))
				   {
					   session.setAttribute("customer", cdto);
					   System.out.println("session: "+session);
					   return new ApiResponse("customer");
					   
				   }
				   else
				   {
					   session.setAttribute("admin", cdto);
					   System.out.println("session: "+session);
					   return new ApiResponse("admin");
				   }
				}
				else
				{
					System.out.println("password did not match");
				}
				
			}
			else
			{
				return new ApiResponse("Invalid Email");
			}
			return new ApiResponse("success");
		}
	}
}
