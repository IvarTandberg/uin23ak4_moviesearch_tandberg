import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import MovieCardHeading from "./MovieCardHeading";
import SearchBox from "./SearchBox";

// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ
export default function Main(){

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState ('James Bond')
    
    const getMovieRequest = async () => {
        const url =`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=70816349`

        const response = await fetch(url);
        const responseJson = await response.json();
        
        
        

        if(responseJson.Search) {
            setMovies(responseJson.Search);
            console.log(responseJson);
            
        }
        
    }

    const getMovieInfo = async () => {
        const url =`http://www.omdbapi.com/?i=${movies}&type=movie&apikey=70816349`

        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson);
    }
        

    useEffect(() => {
        getMovieRequest(searchValue);
        getMovieInfo(movies);
    }, [searchValue])

    return <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieCardHeading heading="Filmer"/>
            <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row"> 
            <MovieCard movies={movies} />
        </div>
        
    </div>

    
}
 
