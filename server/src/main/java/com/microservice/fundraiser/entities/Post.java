package com.microservice.fundraiser.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(nullable=false)
    private String title;
    @Lob
    private byte[] picture;
    @ManyToOne
    private User needy;
    @Column(nullable=false)
    private String cause;
    @Column(nullable=false)
    private Long neededAmount;
    @Column(nullable = false)
    private Date endDate;
    @Column(nullable=false)
    private String category;
}
