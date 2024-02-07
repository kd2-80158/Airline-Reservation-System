package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CustomerDao;
import com.app.dao.LoginDao;
import com.app.dto.LoginDTO;
import com.app.entities.User;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

	@Autowired
	private LoginDao logindao;
	
	@Autowired
	private CustomerDao cdao;
	
	
	@Override
	public LoginDTO checkLoginDetails(LoginDTO ldto) {
		
		User user = cdao.getByEmail(ldto);
		
		if(ldto.getEmail().equals(user.getEmail()))
		{
			
		}
		
		return null;
		
	}

}
