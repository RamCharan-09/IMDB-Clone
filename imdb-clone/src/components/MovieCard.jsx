import React from 'react'

function MovieCard({poster_path, name}) {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end ' style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>
        <div className='text-white text-xl w-full p-2 text-center bg-gray-900/10'>
          {name}
        </div>
    </div>
  )
}

export default MovieCard;
// https://image.tmdb.org/t/p/original/