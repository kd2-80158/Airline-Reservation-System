package com.app.service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.app.dto.PaymentDTO;

public interface PaymentService {

	PaymentDTO addPayment(@NotNull Long reservationId, @Valid PaymentDTO payment);

}
