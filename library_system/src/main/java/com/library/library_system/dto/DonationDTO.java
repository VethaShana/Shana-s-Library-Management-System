package com.library.library_system.dto;

import java.time.LocalDate;

public class DonationDTO {
    private Long id;
    private Long userId;
    private String bookTitle;
    private String author;
    private String condition; // NEW, LIKE_NEW, USED
    private String status;    // PENDING, APPROVED, REJECTED
    private LocalDate donationDate;
}

