package com.library.library_system.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Entity
@Table(name = "donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    private String bookTitle;

    private String author;

    private String condition; // NEW, LIKE_NEW, USED

    private String status; // PENDING, APPROVED, REJECTED

    private LocalDate donationDate;
}

