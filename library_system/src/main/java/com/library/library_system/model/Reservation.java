package com.library.library_system.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Book book;

    private LocalDate reservationDate;

    private LocalDate returnDate;

    private String status; // ACTIVE, COMPLETED, CANCELED
}

