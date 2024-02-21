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
	public UserDTO checkLoginDetails(LoginDTO cdto)
	{
			System.out.println("inside service impl    ");
			
			User user = uDao.getByEmail(cdto.getEmail());
			
			System.out.println("user : "+user);
			
			if(user==null)
				throw new ApiException("User not found");
				
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
//					   session.setAttribute("customer", user.getId());
//					   String userId = (String) session.getAttribute("userId");
					   System.out.println("session: "+user);
					   return mapper.map(user, UserDTO.class);
					   
				   }
				   else
				   {
//					   session.setAttribute("admin", cdto);
//					   String userId = (String) session.getAttribute("userId");
					   System.out.println("session: "+user);
					   return mapper.map(user, UserDTO.class);
				   }
				}
				else
				{
					System.out.println("password did not match");
				}
				
			}
			else
			{
				throw new ApiException("Valid User");
			}
			throw new ApiException("Success");
		}
	
	public ApiResponse updatePassword(String email, String newPassword) {
        // Retrieve the user from the database based on the email
		System.out.println("email and password: "+email+newPassword);
        User user = uDao.findByEmail(email);
        System.out.println(user);
        if (user == null) {
            // Handle the case where the user does not exist
            throw new ApiException("User not found for email: " + email);
        }
        
        // Set the new password for the user
        user.setPassword(newPassword);
        
        // Save the updated user entity back to the database
        uDao.save(user);
        return new ApiResponse("Password reset successfully");
    }

	@Override
	public UserDTO getUserById(Long userId) {
	    User user = uDao.findById(userId).orElse(null);
	    if (user != null) {
	        return mapper.map(user, UserDTO.class);
	    } else {
	        return null; // Or you can throw an exception if needed
	    }
	}
	}
