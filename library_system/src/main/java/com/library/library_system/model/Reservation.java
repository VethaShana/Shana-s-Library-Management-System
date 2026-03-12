package com.library.library_system.model;

import com.library.library_system.enum_files.ReservationStatus;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "reservations")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    private LocalDate reservationDate;

    private LocalDate returnDate;

    @Enumerated(EnumType.STRING)
    private ReservationStatus status;
}

