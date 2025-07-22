package com.library.library_system.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
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

    private String bookCondition; // NEW, LIKE_NEW, USED

    private String status; // PENDING, APPROVED, REJECTED

    private LocalDate donationDate;
}

