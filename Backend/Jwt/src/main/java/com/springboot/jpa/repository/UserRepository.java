package com.springboot.jpa.repository;

import com.springboot.jpa.exceptions.UserNotFoundException;
import com.springboot.jpa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    public abstract User findByUsernameAndPassword(String username, String password);
//    public abstract User getByEmail(String email);
    public abstract List<User> getByUsername(String username);

}
