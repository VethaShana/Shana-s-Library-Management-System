package com.library.library_system.controller;

import com.library.library_system.dto.ReservationDTO;
import com.library.library_system.service.ReservationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReserveBookController {

    private final ReservationService reservationService;

    @PostMapping("/reserve")
    public ReservationDTO reserveBook(
            @RequestParam Long userId,
            @RequestParam Long bookId) {

        return reservationService.reserveBook(userId, bookId);
    }

    @GetMapping("/user/{userId}")
    public List<ReservationDTO> getUserReservations(@PathVariable Long userId) {
        return reservationService.getUserReservations(userId);
    }

    @PutMapping("/return/{reservationId}")
    public ReservationDTO returnBook(@PathVariable Long reservationId) {
        return reservationService.returnBook(reservationId);
    }

    @DeleteMapping("/{reservationId}")
    public void cancelReservation(@PathVariable Long reservationId) {
        reservationService.cancelReservation(reservationId);
    }
}