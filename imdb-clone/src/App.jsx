import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
