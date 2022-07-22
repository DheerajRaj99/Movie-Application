package com.niit.project.FavouriteMovieService;

import com.niit.project.FavouriteMovieService.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class FavouriteMovieServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FavouriteMovieServiceApplication.class, args);
	}



	@Bean
	public FilterRegistrationBean jwtfilter() {
		// add url intercepting here, by using created fi[lter
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new JwtFilter()); // defined filter works here on added urls
		frb.addUrlPatterns("/favourites/favourite-movies/{username}");
		return frb;
	}



}
