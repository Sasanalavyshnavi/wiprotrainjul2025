package com.wipro.booking_ms.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private String flightId;
    private String username;
    private String gender;
    private String userEmail;
    private LocalDate travelDate;
    private double amount;        
    private String status;

    // Constructor WITHOUT bookingId
    public Booking(String flightId, String username, String gender, String userEmail,
                   LocalDate travelDate, double amount, String status) {
        this.flightId = flightId;
        this.username = username;
        this.gender = gender;
        this.userEmail = userEmail;
        this.travelDate = travelDate;
        this.amount = amount;
        this.status = status;
    }

	

}
