package com.library.library_system.service;

import com.library.library_system.dto.UserDTO;
import com.library.library_system.dto.UserLoginDTO;
import com.library.library_system.dto.UserRegisterDTO;

public interface UserService {
    UserDTO register(UserRegisterDTO registerDTO);
    String login(UserLoginDTO loginDTO);
    UserDTO getUserProfile(Long userId);
    void changePassword(Long userId, String oldPassword, String newPassword);
}

