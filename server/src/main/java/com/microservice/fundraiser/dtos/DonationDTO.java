package com.microservice.fundraiser.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DonationDTO {
    private Integer id;
    private PostDTO postDTO;
    private UserDTO donor;
    private int Amount;
}
