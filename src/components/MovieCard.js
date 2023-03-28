import React from "react"

const MovieCard = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> (
                <div className="d-flex justify-content-start">
                    <img scr={movie.Poster} alt='movie'></img>
                </div>
                ))}
        </>
    )
};

export default MovieCard;