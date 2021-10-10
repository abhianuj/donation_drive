package com.microservice.fundraiser.dtos;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
    private String email;
    private String firstName;
    private String lastName;
    private String token;
}
