import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Cards() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getUpcomming() {
            const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fd5dbadeb0fc07b3a0c2b195a21a2ac4&language=en-US&page=1');
            setMovies(response.data.results);
        }
        getUpcomming();
    }, []);


    return (
        <>
            {movies && movies.map(movie => (
                <label>{movie.title}</label>
            ))}
        </>
    )
}

export default Cards;