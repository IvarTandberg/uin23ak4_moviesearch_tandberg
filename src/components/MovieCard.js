import React from "react"
// funksjon er basert på https://stackoverflow.com/questions/34097560/react-js-replace-img-src-onerror
// bilde er hentet fra https://placeholder.com/ som var linket på canvas
const placeholderbilde = (event) => {
    event.target.src = "https://cms-cdn.placeholder.co/Home_page1_76f0b1d7ab.png?width=3840";
  };





// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ 
// onError er basert på https://www.w3schools.com/jsref/event_onerror.asp
const MovieCard = (props) => {
    return (
        <>
            
            {props.movies?.map((movie, index) => 
                <div className="col" /*onClick={placeholderbilde}*/>
                    <div className="movieoversikt">
                    <img className="poster"
                        src={movie.Poster} 
                        alt='movie' 
                        onError={placeholderbilde}
                        //onClick={popup} //fremtidig funksjon
                        ></img>
                    <div className="textboks">
                        <h2 className="title">{movie.Title}</h2>
                        <p>{movie.Year}</p>
                        <p>{movie.Genre}</p>
                        <p>Director: {movie.Director}</p>
                        <p>Actors: {movie.Actors}</p>
                        <p>Awards: {movie.Awards}</p>
                    </div>
                    </div>
                   
                    
                </div>
                )}
            
        </>
    )
    
};

export default MovieCard;