package com.niit.project.FavouriteMovieService.repository;

import com.niit.project.FavouriteMovieService.model.FavouriteMovies;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteMoviesRepository extends MongoRepository<FavouriteMovies,Integer> {

    public abstract List<FavouriteMovies> getByUsername(String username);
    public abstract  FavouriteMovies deleteByTitle(String title);
}
