package com.app.controller;

import com.app.dto.FeedbackDTO;
import com.app.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/{custId}/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @GetMapping("/{feedbackId}")
    public ResponseEntity<FeedbackDTO> getFeedback(@PathVariable Long custId, @PathVariable Long feedbackId) {
        // Assuming FeedbackService has a method to retrieve feedback by ID
        FeedbackDTO feedbackDTO = feedbackService.getFeedbackById(custId, feedbackId);
        
        if (feedbackDTO != null) {
            return new ResponseEntity<>(feedbackDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<String> addFeedback(@PathVariable Long custId, @RequestBody FeedbackDTO feedbackDTO) {
        // Assuming FeedbackService has a method to add feedback
        feedbackService.addFeedback(custId, feedbackDTO);
        return new ResponseEntity<>("Feedback added successfully", HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{feedbackId}")
    public ResponseEntity<String> deleteFeedback(@PathVariable Long custId, @PathVariable Long feedbackId) {
        // Assuming FeedbackService has a method to delete feedback
        feedbackService.deleteFeedback(custId, feedbackId);
        return new ResponseEntity<>("Feedback deleted successfully", HttpStatus.OK);
    }

    @PutMapping("/update/{feedbackId}")
    public ResponseEntity<String> updateFeedback(@PathVariable Long custId, @PathVariable Long feedbackId,
                                                 @RequestBody FeedbackDTO feedbackDTO) {
        // Assuming FeedbackService has a method to update feedback
        feedbackService.updateFeedback(custId, feedbackId, feedbackDTO);
        return new ResponseEntity<>("Feedback updated successfully", HttpStatus.OK);
    }
}
