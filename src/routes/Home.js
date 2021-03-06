import React, {useState, useEffect, useCallback} from 'react';import axios from "axios";import Movie from "../components/Movie";import movieReudux, {setMovie} from "../redux/movieRedux";import '../css/Home.css'const Home = () => {    const [movies, setMovies] = useState(null);    const [Loading, isLoading] = useState(true);    const [error, setError] = useState(null);    const fetchMovies = async () => {        try {            setError(false)            setMovies(null);            // const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");            // api를 호출할때만 => key가 있으면 값을 호출 / 키가 없으면 값을 호출하지 않음            store.dispatch            setMovies(await movieReudux(movies,setMovie()));            // setMovies(movies);        } catch (e) {            setError(e)        }        isLoading(false);    };    useEffect(() => {        fetchMovies();    }, [])    if (error) return <div>에러발생</div>    return (        <section className="container">            {                Loading ? (                    <div className={"loader"}>{}                        <span className="loader__text">Loading...</span>                    </div>                ) : (<div className={'movies'}>{                        movies.map(movie => (                            <Movie                                key = {movie.id}                                id={movie.id}                                year={movie.year}                                title={movie.title}                                summary={movie.summary}                                poster={movie.medium_cover_image}                                genres={movie.genres} />                        ))                    }</div>                )}        </section>    );}export default Home;