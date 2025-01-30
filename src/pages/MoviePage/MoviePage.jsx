import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const API_KEY = "7711f6bf2ea2cd9f3132825c07f94af8";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovieById = async (id) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            setMovie(response.data);
        } catch (error) {
            console.error("Error fetching movie by ID:", error);
        }
    };

    useEffect(() => {
        getMovieById(movieId);
    }, [movieId]);

    return (
      <section>
        <h2>Movie Details</h2>
      {movie && (
          <article>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
          <h3>{movie.original_title}</h3>
          <p>Popularity: {movie.popularity}</p>
      </article>
      )}
      </section>
    );
}

export default MovieDetails;