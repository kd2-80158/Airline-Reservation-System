package com.app.dao;
import org.springframework.data.jpa.repository.JpaRepository;


import com.app.entities.User;
public interface CustomerDao extends JpaRepository<User, Long> {

}
