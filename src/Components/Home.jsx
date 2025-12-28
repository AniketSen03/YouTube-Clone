import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

const Home = ({ toggle, converter, day }) => {
  const [category, setcategory] = useState(0)
  return (
    <>
      <div className="flex pt-5">
        {/* Sidebar */}
        <Sidebar
          toggle={toggle}
          category={category}
          setcategory={setcategory}
        />

        {/* Feed */}
        <div className="flex-1">
          <Feed
            category={category}
            converter={converter}
            day={day}
          />
        </div>
      </div>

    </>
  )
}

export default Home