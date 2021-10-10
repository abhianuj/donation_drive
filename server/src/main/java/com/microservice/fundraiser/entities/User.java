package com.microservice.fundraiser.entities;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String email;
    @Column(nullable=false)
    private String name;
    @Column(nullable=false)
    private String password;
    private String token;
}
