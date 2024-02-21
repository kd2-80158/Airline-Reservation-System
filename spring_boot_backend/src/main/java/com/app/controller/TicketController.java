package com.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketController {

    @Autowired
    private JavaMailSender emailSender;

    @GetMapping("/ticket/email-ticket")
    public String sendTicketByEmail(
            @RequestParam String email,
            @RequestParam String flightId,
            @RequestParam String reservationDate,
            @RequestParam String passenger,
            @RequestParam String seatClass,
            @RequestParam String totalPrice,
            @RequestParam String paymentStatus,
            @RequestParam String instructions,
            @RequestParam String addressDetails
    ) {
        // Logic to send the ticket via email
        try {
            // Construct email message
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject("Your Flight Ticket");
            message.setText("Flight ID: " + flightId + "\n" +
                            "Reservation Date: " + reservationDate + "\n" +
                            "Passenger: " + passenger + "\n" +
                            "Seat Class: " + seatClass + "\n" +
                            "Total Price: " + totalPrice + "\n" +
                            "Payment Status: " + paymentStatus + "\n" +
                            "Instructions: " + instructions + "\n" +
                            "Address Details: " + addressDetails);

            // Send email
            emailSender.send(message);

            return "Ticket sent successfully to " + email;
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send ticket to " + email;
        }
    }
}
