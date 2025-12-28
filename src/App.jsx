import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Video from './Components/Video'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import SearchResults from './Components/SearchResults'

const App = () => {
  const [toggle, settoggle] = useState(true)

  const converter = (count) => {
    if (count >= 1000000000) {
      return (count / 1000000000).toFixed(1) + ' B'
    }
    else if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + ' M'
    }
    else if (count >= 1000) {
      return (count / 1000).toFixed(1) + ' K'
    }
    else {
      return count
    }
  }

  const day = (day) => {
    if (day === 'a day ago') {
      return '1 day ago'
    }
    return day

  }
  return (
    <>
      <div className='bg-zinc-950 min-h-screen'>
        <Navbar settoggle={settoggle} />
        <div className="pt-14">
          <Routes>
            <Route path='/' element={<Home toggle={toggle} converter={converter} day={day} />} />
             {/* Category based */}
            <Route path='/video/:categoryid/:videoid' element={<Video converter={converter} day={day} />} />
             {/* Search based */}
            <Route path="/video/search/:videoid" element={<Video converter={converter} day={day} />} />
            <Route path='/search/:query' element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App