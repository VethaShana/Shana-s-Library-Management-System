package com.library.library_system.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DonationDTO {
    private Long id;
    private Long userId;
    private String bookTitle;
    private String author;
    private String bookCondition; // NEW, LIKE_NEW, USED
    private String status;    // PENDING, APPROVED, REJECTED
    private LocalDate donationDate;
}

