package com.microservice.fundraiser.dtos;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostDTO {
    private Integer id;
    private String title;
    private byte[] picture;
    private UserDTO needy;
    private String cause;
    private Long neededAmount;
    private Date endDate;
    private String category;
}
