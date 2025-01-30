import { useState, useEffect } from "react";

const apiKey = "7711f6bf2ea2cd9f3132825c07f94af8";
const url="https://api.themoviedb.org/3/movie/now_playing?api_key="

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Fantasy",
  "Horror",
  "Romance",
  "Sci-Fi",
];



export default function MovieFilterForm() {
  const [fromYear, setFromYear] = useState(2000);
  const [toYear, setToYear] = useState(2024);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [movies, setMovies] = useState("");
    


  const handleSubmit = (e) => {
    e.preventDefault();
    //   onFilter({ fromYear, toYear, selectedGenre });
      console.log(fromYear,toYear, selectedGenre);
  };
    
  const getmovies = async () => {
    try {
      const response = await axios.get(
        `${url}${apiKey}`
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching tags", error);
    }
  };

    useEffect(() => {
        getmovies();
    },[])
    
    

  return (
    <form onSubmit={handleSubmit} className="form-movie">
      <div className="form-movie__container">
        <label className="form-movie__from-label">From Year</label>
        <input
          type="number"
          value={fromYear}
          onChange={(e) => setFromYear(e.target.value)}
          className="form-movie__from-input"
        />
      </div>

      <div className="form-movie__container">
        <label className="form-movie__to-label">To Year</label>
        <input
          type="number"
          value={toYear}
          onChange={(e) => setToYear(e.target.value)}
          className="form-movie__to-input"
        />
      </div>

      <div className="form-movie__container">
        <label className="form-movie__genre">Genre</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="form-movie__select"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="form-movie__button">
        Filter Movies
      </button>
    </form>
  );
}
