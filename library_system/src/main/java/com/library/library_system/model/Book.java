package com.library.library_system.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    @Column(unique = true)
    private String isbn;

    @ManyToOne
    private Category category;

    private String coverImageUrl;

    private String availabilityStatus; // AVAILABLE, RESERVED, CHECKED_OUT

    private Double rating;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

