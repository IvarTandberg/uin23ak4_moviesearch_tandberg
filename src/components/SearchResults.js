import React from "react";

// funksjonen er basert på  løsningen vis i https://www.youtube.com/watch?v=jc9_Bqzy2YQ
const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input 
                className="form-control" 
                value={props.value}
                onChange={(event)=> props.setSearchValue(event.target.value)}
                placeholder="Søk etter film..."
            ></input>
        </div>
    )
}

export default SearchBox;
