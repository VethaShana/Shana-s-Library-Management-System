package com.library.library_system.dto;

import lombok.Data;

@Data
public class CreateBookDTO {
    private String title;
    private String author;
    private String isbn;
    private Long categoryId;
    private String coverImageUrl;
}
