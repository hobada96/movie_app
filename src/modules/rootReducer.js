import axios from "axios";const SET_MOVIE = 'movie/SET_MOVIE';export const setMovie = async() => ({    type: SET_MOVIE});export default async function movieReudux(movies,action){    switch (action.type){        case SET_MOVIE:{            const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");            return{                movies            }        }    }}