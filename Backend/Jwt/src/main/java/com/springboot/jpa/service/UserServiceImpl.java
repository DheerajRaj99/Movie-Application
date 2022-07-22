package com.springboot.jpa.service;

import com.springboot.jpa.exceptions.UserNotFoundException;
import com.springboot.jpa.model.User;
import com.springboot.jpa.proxy.FavouritesProxy;
import com.springboot.jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private FavouritesProxy favouritesProxy;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, FavouritesProxy favouritesProxy)
    {
        this.userRepository=userRepository;

        this.favouritesProxy=favouritesProxy;

    }

    @Override
    public User saveUser(User user) {
        User result= userRepository.save(user);



        ResponseEntity r3=favouritesProxy.createUser(result);

        return result;
    }

    @Override
    public User authenticateUser(String username, String password) throws UserNotFoundException{
        User user=userRepository.findByUsernameAndPassword(username,password);
        if(user!=null)
        {
            return user;
        }
        else
        {
            throw new UserNotFoundException();
        }
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    @Override
    public List<User> getUserDetails(String username) {
        return userRepository.getByUsername(username);
    }
}
