import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";

export default function Main(){


    const getMovies = async() =>{
        const [movies, setMovies] = useState([]);
    }
    const getMovieRequest = () => {
        const url
    }
    return <div className='container-fluid movie-app'>
        <div className="row"> 
            <MovieCard movies={movies} />
        </div>
        
    </div>

    
}
 
