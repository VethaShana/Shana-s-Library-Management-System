package com.library.library_system.service;

import com.library.library_system.dto.ReservationDTO;
import java.util.List;

public interface ReservationService {

    ReservationDTO reserveBook(Long userId, Long bookId);

    List<ReservationDTO> getUserReservations(Long userId);

    ReservationDTO returnBook(Long reservationId);

    void cancelReservation(Long reservationId);
}