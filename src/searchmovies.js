import React, {useState} from 'react';

function Searchmovies() {

    const [query,setQuery] =useState('');
    const [movies,setMovie] =useState([]) ;
    const searchmovie =async (e)=>
    {
        e.preventDefault();
        console.log("submitting");
        
        const url= `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8496f3ea403a50b906b7829c5f9b38a3`;
        try{
        const res= await fetch(url);
        const data= await res.json();
       
        setMovie(data.results);
    

        }
        catch(err){
            console.log(err);
        }

    }
    return (
        <>
        <form className="form" onSubmit={searchmovie}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input type="text" name="query" className="input" placeholder="i.e. Interstellar"
            value={query} onChange={(e)=> setQuery(e.target.value)}>

            </input>
            <button className="button" type="submit">Search

            </button>
            
            </form>
            <div className="card-list">
            {movies.filter(movie=> movie.poster_path).map(movie =>(
                <div className="card" key={movie.id}>
                    <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`
} alt={movie.title+ 'poster'}

/>
<div className="card--content">
    <h3 className="card--title">{movie.title}</h3>
    <p><small><b> Release Date:</b> {movie.release_date}</small></p>
    <p><small><b>Rating:</b> {movie.vote_average}</small></p>
    
    </div>
            </div>
            ))}
            </div>
        
        </>
    );
}

export default Searchmovies;