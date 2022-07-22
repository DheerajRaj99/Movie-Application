package com.springboot.jpa.service;

import com.springboot.jpa.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator{
    @Override
    public Map<String, String> generateToken(User user) {
        String jwttoken= Jwts.builder().setSubject(user.getUsername()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256,"mykey").compact();
        Map<String, String> map=new HashMap<>();
        map.put("token",jwttoken);
        map.put("message","User successfully logged in");
        return map;
    }
}
