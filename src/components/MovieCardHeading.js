import React from "react";

// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ
const MovieCardHeading = (props) => {
    return (
        <div className="col">
            <h1 className="overskrift">{props.heading}</h1>
        </div>
    );
};

export default MovieCardHeading;
