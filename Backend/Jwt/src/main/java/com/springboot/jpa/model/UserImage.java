package com.springboot.jpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class UserImage {

    @Id
    private String username;
    @Column(columnDefinition = "LONGBLOB")
    private String profilePic;

}
