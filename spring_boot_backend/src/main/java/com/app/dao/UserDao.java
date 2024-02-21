package com.app.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.LoginDTO;
import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	User getByEmail(String cdto);

	User findByEmail(String email);

}
