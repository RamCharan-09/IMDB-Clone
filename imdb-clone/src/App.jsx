import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  let [watchlist, setWatchList] = useState([])

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList)
    console.log(filteredWatchList)
  }


  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> 
                <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList = {handleRemoveFromWatchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList = {setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
