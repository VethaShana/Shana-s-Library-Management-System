package com.library.library_system.dto;

import lombok.Data;

@Data
public class BookDTO {
    private Long id;
    private String title;
    private String author;
    private String isbn;
    private String category;
    private String coverImageUrl;
    private String availabilityStatus;
    private Double rating;
}

