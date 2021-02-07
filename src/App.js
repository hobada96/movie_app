import React, {useState, useEffect} from 'react';
import axios from "axios";
import Movie from "./Movie";

const App = () => {
    const [movies, setMovies] = useState(null);
    const [Loading, isLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setError(false)
                setMovies(null);
                const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
                setMovies(movies);
            } catch (e) {
                setError(e)
            }
            isLoading(false);
        };
        fetchMovies();
    },[]) // 여기서 에러 발생.

    if(error) return <div>에러발생</div>
    return (
            <div>{Loading
                ? "Loading..."
                : movies.map(movie => {
                return <Movie
                         id={movie.id}
                         year={movie.year}
                         title={movie.title}
                         summary={movie.summary}
                         poster={movie.poster} />
            })}</div>
    );
}

export default App;

