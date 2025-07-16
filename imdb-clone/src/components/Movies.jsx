// import React, { useEffect } from 'react'
// import axios from 'axios'
// import MovieCard from './MovieCard'
// import { useState } from 'react'
// function Movies() {

//   const [movies, setMovies] = useState([])

//   useEffect(()=>{
//     axios.get(`https://api.themoviedb.org/3/person/popular?api_key=39146e7b724492007a10a2434c995620&language=en-US&page=2`).then(function(res){
//       setMovies(res.data.results)
//     })
//     .catch(function (error) {
//         console.error("Error fetching movies:", error);
//     });
//   },[])

//   return (
//     <div className='p-5'>
//         <div className='text-2xl font-bold text-center'>
//           Trending Movies
//         </div>
//         <div className='flex flex-row flex-wrap justify-around'>
//           {/* <MovieCard/> */}
//           {movies.map((movieObj) =>{
//             return <MovieCard key = {movieObj.id} poster_path={movieObj.poster_path}/>
//           })}
//         </div>
//     </div>
//   )
// }

// export default Movies

// // https://api.themoviedb.org/3/person/popular?api_key=39146e7b724492007a10a2434c995620&language=en-US&page=2

import { useState } from "react";
import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo > 1) {
      // setPageNo(1)

      setPageNo(pageNo - 1);
    }
  }

  const handleNext = () =>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=39146e7b724492007a10a2434c995620&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      })
      .catch(function (error) {
        console.error("Error fetching movies:", error);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 bg-black text-white font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-3">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} name = {movieObj.original_title} poster_path={movieObj.poster_path}/>;
        })}
      </div>
      <Pagination pageNo = {pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  );
}

export default Movies;