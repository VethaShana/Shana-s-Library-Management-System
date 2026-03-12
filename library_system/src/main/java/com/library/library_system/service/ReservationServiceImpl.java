package com.library.library_system.service;

import com.library.library_system.dto.ReservationDTO;
import com.library.library_system.enum_files.ReservationStatus;
import com.library.library_system.model.Book;
import com.library.library_system.model.Reservation;
import com.library.library_system.model.User;
import com.library.library_system.repository.BookRepository;
import com.library.library_system.repository.ReservationRepository;
import com.library.library_system.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;

    @Override
    public ReservationDTO reserveBook(Long userId, Long bookId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        if (!"AVAILABLE".equals(book.getAvailabilityStatus())) {
            throw new RuntimeException("Book not available");
        }

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setBook(book);
        reservation.setReservationDate(LocalDate.now());
        reservation.setReturnDate(LocalDate.now().plusDays(7));
        reservation.setStatus(ReservationStatus.RESERVED);

        book.setAvailabilityStatus("RESERVED");

        bookRepository.save(book);

        Reservation saved = reservationRepository.save(reservation);

        return mapToDTO(saved);
    }

    @Override
    public List<ReservationDTO> getUserReservations(Long userId) {

        return reservationRepository.findByUserId(userId)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ReservationDTO returnBook(Long reservationId) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        Book book = reservation.getBook();

        book.setAvailabilityStatus("AVAILABLE");
        reservation.setStatus(ReservationStatus.RETURNED);

        bookRepository.save(book);

        return mapToDTO(reservationRepository.save(reservation));
    }

    @Override
    public void cancelReservation(Long reservationId) {

        Reservation reservation = reservationRepository.findById(reservationId)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        Book book = reservation.getBook();
        book.setAvailabilityStatus("AVAILABLE");

        reservation.setStatus(ReservationStatus.CANCELED);

        bookRepository.save(book);
        reservationRepository.save(reservation);
    }

    private ReservationDTO mapToDTO(Reservation reservation) {

        ReservationDTO dto = new ReservationDTO();

        dto.setId(reservation.getId());
        dto.setUserId(reservation.getUser().getId());
        dto.setBookId(reservation.getBook().getId());
        dto.setReservationDate(reservation.getReservationDate());
        dto.setReturnDate(reservation.getReturnDate());
        dto.setStatus(String.valueOf(reservation.getStatus()));

        return dto;
    }
}