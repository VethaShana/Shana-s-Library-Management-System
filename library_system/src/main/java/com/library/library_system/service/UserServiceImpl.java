package com.library.library_system.service;

import com.library.library_system.config.JWT.JwtService;
import com.library.library_system.dto.UserDTO;
import com.library.library_system.dto.UserLoginDTO;
import com.library.library_system.dto.UserRegisterDTO;
import com.library.library_system.model.User;
import com.library.library_system.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper; // or MapStruct mapper
    private final JwtService jwtService;

    @Override
    public UserDTO register(UserRegisterDTO registerDTO) {
        if (userRepository.findByEmail(registerDTO.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        User user = new User();
        user.setName(registerDTO.getName());
        user.setEmail(registerDTO.getEmail());
        //user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
        user.setPassword(registerDTO.getPassword());
        user.setRoles(List.of("USER"));
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());

        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    @Override
    public String login(UserLoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

//        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
//            throw new RuntimeException("Invalid credentials");
//        }

        if (!(loginDTO.getPassword()).equals(user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return jwtService.generateToken(user.getName(),user.getRoles());

    }

    @Override
    public UserDTO getUserProfile(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return modelMapper.map(user, UserDTO.class);
    }

//    @Override
//    public UserDTO updateProfile(Long userId, UserUpdateDTO updateDTO) {
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        user.setName(updateDTO.getName());
//        user.setProfilePicture(updateDTO.getProfilePicture());
//        user.setUpdatedAt(LocalDateTime.now());
//
//        User updatedUser = userRepository.save(user);
//        return modelMapper.map(updatedUser, UserDTO.class);
//    }

    @Override
    public void changePassword(Long userId, String oldPassword, String newPassword) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(oldPassword, user.getPassword())) {
            throw new RuntimeException("Incorrect current password");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }
}

