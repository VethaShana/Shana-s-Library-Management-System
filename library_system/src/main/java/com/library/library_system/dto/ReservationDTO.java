package com.library.library_system.dto;

import java.time.LocalDate;

public class ReservationDTO {
    private Long id;
    private Long userId;
    private Long bookId;
    private LocalDate reservationDate;
    private LocalDate returnDate;
    private String status;
}
