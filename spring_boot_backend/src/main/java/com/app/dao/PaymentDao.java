package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Payment;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Long> {

}
