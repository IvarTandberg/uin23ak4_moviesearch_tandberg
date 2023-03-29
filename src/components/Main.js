import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import MovieCardHeading from "./MovieCardHeading";
import SearchBox from "./SearchBox";

// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ
export default function Main(){

    const [movies, setMovies] = useState([]);
    const [movieInfo, setMovieInfo] = useState([]);
    const [searchValue, setSearchValue] = useState ('James Bond')
    /*
    const getMovieRequest = async () => {
        const url =`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=70816349`

        const response = await fetch(url);
        const responseJson = await response.json();
        
        
        

        if(responseJson.Search) {
            setMovies(responseJson.Search);
            console.log(responseJson);
            
        }
        
    }

    const getMovieInfo = async (movies) => {
        const url =`http://www.omdbapi.com/?i=${movies.imdbID}&type=movie&apikey=70816349`

        const response = await fetch(url);
        const responseJson = await response.json();
        console.log(responseJson) 
    }*/
    const getMovieRequest = async () => {
        const url =`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=70816349`

        const response = await fetch(url).then(response => response.json());
        setMovies(response.Search)
        return response
    }

    const getMovieInfo = async () => {
        const { Search: search } = await getMovieRequest();
        const movieInfoPromises = search.map(async movie => {
          const url = `http://www.omdbapi.com/?i=${movie.imdbID}&type=movie&apikey=70816349`;
          const response = await fetch(url);
            return await response.json();
        });
        const movieInfo = await Promise.all(movieInfoPromises);
        setMovieInfo(movieInfo);
      };

/*     const getMovieInfo = async () => {
        
        const {Search: search} = await getMovieRequest()
        console.log(search)
        const url =`http://www.omdbapi.com/?i=${search[0].imdbID}&type=movie&apikey=70816349`
        
        const response = await fetch(url).then(response => response.json());
        setMovieInfo(response.Search)
        console.log(response)

    } */
    useEffect(() => {
        getMovieInfo()
        console.log(movieInfo)
    }, [searchValue])

    

    return <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieCardHeading heading="Filmer"/>
            <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row"> 
            <MovieCard movies={movieInfo} />
        </div>
        
    </div>
}