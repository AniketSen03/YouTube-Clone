import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'

const Home = ({toggle,converter,day}) => {
  const [category, setcategory] = useState(0)
  return (
    <>
   <Sidebar toggle={toggle} Sidebar={Sidebar} setcategory={setcategory}/>
   <div className='flex flex-wrap justify-evenly items-center'>
   <Feed converter={converter} day ={day} category={category}/>
   </div>
    </>
  )
}

export default Home