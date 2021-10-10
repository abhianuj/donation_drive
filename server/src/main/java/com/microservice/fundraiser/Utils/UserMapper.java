package com.microservice.fundraiser.Utils;

import com.microservice.fundraiser.dtos.UserDTO;
import com.microservice.fundraiser.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public UserDTO toDTO(User user){
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }
    public User toEntity(UserDTO userDTO){
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setToken(userDTO.getToken());
        user.setToken(userDTO.getToken());
        return user;
    }
}
