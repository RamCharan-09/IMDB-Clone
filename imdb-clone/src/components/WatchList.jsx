import React, { useEffect, useState } from 'react'

function Watchlist({watchlist, setWatchList}) {

  const [search, setSearch] = useState('')
  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  let sortIncreasing = ()=>{
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }
  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }


  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white bg-blue-400 font-bold mx-4'>Action</div>
      <div className='flex justify-center h-[3rem] w-[9rem] rounded-xl items-center text-white bg-gray-400 font-bold'>Action</div>
    </div>



    <div className='flex justify-center my-4'>
      <input onChange = {handleSearch} value = {search} type="text" className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' placeholder='Search for any movie'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
              <div onClick={sortIncreasing} className='p-2'><i className="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Rating</div>
              <div onClick={sortDecreasing} className='p-2'><i className="fa-solid fa-arrow-down"></i></div>
            </th>
            
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>

          {watchlist.filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLowerCase())
          }).map((movieObj) =>{
            return <tr className='border-b-2' key = {movieObj.id}>
              <td className='flex item-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src= {`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}/>
                <div className='mx-10 justify-center'>{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>Mythology</td>
              <td className='text-red-800'>Delete</td>
            </tr>
          })}



            
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default Watchlist