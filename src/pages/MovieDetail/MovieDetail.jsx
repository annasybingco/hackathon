import axios from "axios";
import React, { useEffect, useState } from "react";
import "../MovieDetail/MovieDetail.scss";

const API_KEY = "7711f6bf2ea2cd9f3132825c07f94af8"; 

function MovieDetails() { 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function RandomMovie() {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=7711f6bf2ea2cd9f3132825c07f94af8`
        );
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }

    RandomMovie();
  }, []);

  if (!movie) return <p className="text-center">Loading...</p>;
  
  return (
    <section className="movie-detail">
      <h2 className="movie-detail__title">{movie.original_title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
      <div className="movie-detail__about">
          <p className="movie-detail__stars">⭐Stars: {movie.vote_average} /10</p>
          <p className="movie-detail__release-date">Release date: {movie.release_date}</p>
          <p className="movie-detail__popularity">Popularity: {movie.popularity}</p>
      </div>
        <p className="movie-detail__overview">{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;