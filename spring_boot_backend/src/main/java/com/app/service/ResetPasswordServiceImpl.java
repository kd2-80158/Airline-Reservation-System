package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ResetPasswordServiceImpl implements ResetPasswordService {

    @Autowired
    private JavaMailSender emailSender;

    @Override
    public boolean resetPassword(String email, String newPassword) {
        try {
            // Create a SimpleMailMessage instance
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Password Reset Request");
            message.setText("Please click on the following link to reset your password: http://localhost:3000/ResetPassword");
            
            // Send the email
            emailSender.send(message);
            
            // Return true indicating successful email sending
            return true;
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            // Return false indicating failure to send the email
            return false;
        }
    }
}
