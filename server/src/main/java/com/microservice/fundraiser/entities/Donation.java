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
public class Donation {
    @Id
    @GeneratedValue
    private Integer id;
    @ManyToOne
    private Post post;
    @ManyToOne
    private User donor;
    @Column(nullable=false)
    private int Amount;
}
