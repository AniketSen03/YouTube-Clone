import React from 'react'
import Playvideo from './Playvideo'
import { useParams } from 'react-router-dom'
import Recommend from './Recommend';
import './video.css'

const Video = ({converter,day}) => {
  const { videoid, categoryid } = useParams();
  return (
    <>
      <div className='wrap flex justify-evenly pt-[4%] pl-[1%]'>
        <Playvideo videoid={videoid} converter={converter} day={day}/>
        <Recommend categoryid={categoryid} converter={converter} day={day}/>
      </div>
    </>
  )
}

export default Video