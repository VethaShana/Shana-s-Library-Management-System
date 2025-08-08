package com.library.library_system.controller;

import com.library.library_system.dto.UserDTO;
import com.library.library_system.dto.UserLoginDTO;
import com.library.library_system.dto.UserRegisterDTO;
import com.library.library_system.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 📝 Register a new user
    @PostMapping("/auth/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserRegisterDTO registerDTO) {
        UserDTO userDTO = userService.register(registerDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(userDTO);
    }

    // 🔐 Login and receive JWT
    @PostMapping("/auth/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody @Valid UserLoginDTO loginDTO) {
        String token = userService.login(loginDTO);
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return ResponseEntity.ok(response);
    }

    // 👤 Get user profile
    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getProfile(@AuthenticationPrincipal UserDetails userDetails) {
        Long userId = extractUserIdFromPrincipal(userDetails);
        UserDTO userDTO = userService.getUserProfile(userId);
        return ResponseEntity.ok(userDTO);
    }

    // 🛠 Update user profile
//    @PutMapping("/profile")
//    public ResponseEntity<UserDTO> updateProfile(@AuthenticationPrincipal UserDetails userDetails,
//                                                 @RequestBody UserUpdateDTO updateDTO) {
//        Long userId = extractUserIdFromPrincipal(userDetails);
//        UserDTO updatedUser = userService.updateProfile(userId, updateDTO);
//        return ResponseEntity.ok(updatedUser);
//    }

    // 🔑 Change password
    @PutMapping("/change-password")
    public ResponseEntity<String> changePassword(@AuthenticationPrincipal UserDetails userDetails,
                                                 @RequestParam String oldPassword,
                                                 @RequestParam String newPassword) {
        Long userId = extractUserIdFromPrincipal(userDetails);
        userService.changePassword(userId, oldPassword, newPassword);
        return ResponseEntity.ok("Password changed successfully");
    }

    // Utility method to extract user ID from principal (JWT based auth)
    private Long extractUserIdFromPrincipal(UserDetails userDetails) {
        // Example logic assuming email as username and fetching user ID
        String email = userDetails.getUsername();
        // You can inject UserRepository here to fetch the user ID or add a custom UserPrincipal
        throw new UnsupportedOperationException("Implement user ID extraction logic here.");
    }
}

