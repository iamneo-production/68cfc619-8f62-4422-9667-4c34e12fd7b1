package com.iamneo.security.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "datainfo")
public class Task {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int taskid;
    private String type;
    private String name;
    private String description;
    private String category;
    private String status;
    private LocalDate startdate;
    private LocalDate enddate;
    private String priority;
    private String notification;
    

    
}