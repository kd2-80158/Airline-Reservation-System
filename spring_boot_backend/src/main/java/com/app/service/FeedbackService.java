package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.FeedbackDTO;

public interface FeedbackService {

	FeedbackDTO getFeedbackById(Long custId, Long feedbackId);

	ApiResponse addFeedback(Long custId, FeedbackDTO feedbackDTO);

	ApiResponse deleteFeedback(Long custId, Long feedbackId);

	ApiResponse updateFeedback(Long custId, Long feedbackId, FeedbackDTO feedbackDTO);

}
