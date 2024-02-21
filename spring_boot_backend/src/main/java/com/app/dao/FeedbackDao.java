package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Long> {

}
