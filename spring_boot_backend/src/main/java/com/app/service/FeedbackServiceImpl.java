package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ApiException;
import com.app.dao.AddressDao;
import com.app.dao.FeedbackDao;
import com.app.dao.UserDao;
import com.app.dto.AddressDTO;
import com.app.dto.ApiResponse;
import com.app.dto.FeedbackDTO;
import com.app.entities.Address;
import com.app.entities.Feedback;
import com.app.entities.User;
@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	private UserDao uDao;
	
	@Autowired
	private FeedbackDao fDao;

	@Autowired
	private ModelMapper mapper;
	
	@Override
	public FeedbackDTO getFeedbackById(Long custId, Long feedbackId) {
		return mapper.map(
				fDao.findById(feedbackId).orElseThrow(
						() -> new ApiException("Invalid User  Id OrFeedback assigned !!!!")),
				FeedbackDTO.class);
	}

	@Override
	public ApiResponse addFeedback(Long custId, FeedbackDTO feedbackDTO) {
		User user = uDao.findById(custId).
				orElseThrow(() -> new ApiException("Invalid customer"));
		Feedback addressEntity = mapper.map(feedbackDTO, Feedback.class);
		addressEntity.setUser(user);
		fDao.save(addressEntity);
		return new ApiResponse("Feedback to User , " + user.getFirstName());	}

	@Override
	public ApiResponse deleteFeedback(Long custId, Long feedbackId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ApiResponse updateFeedback(Long custId, Long feedbackId, FeedbackDTO feedbackDTO) {
		Feedback feedbackEntity = fDao.findById(custId)
				.orElseThrow(() -> new ApiException("Address is not yet assigned !!!! "));
	
		mapper.map(feedbackDTO, feedbackEntity);
		// save adr details
		fDao.save(feedbackEntity);
		return new ApiResponse("Updated Feedback for  User ");
	}

}
