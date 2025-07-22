package com.library.library_system.model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String role; // USER, ADMIN, LIBRARIAN

    private String profilePicture;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

