import React, { useEffect, useState } from 'react'
import {API_KEY} from '../Api'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './feed.css'

const Feed = ({category,converter,day}) => {
    const [videos, setvideos] = useState([])
    const [imgdata, setimgdata] = useState(null)

    const fetchYouTubeData = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`);
            setvideos(res.data.items);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    useEffect(() => {
        fetchYouTubeData()
    }, [category])


    const formatDuration = (isoDuration) => {
        let hours = 0, minutes = 0, seconds = 0;
    
        const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    
        if (match) {
            if (match[1]) hours = parseInt(match[1].replace('H', ''), 10);
            if (match[2]) minutes = parseInt(match[2].replace('M', ''), 10);
            if (match[3]) seconds = parseInt(match[3].replace('S', ''), 10);
        }
    
        return [hours, minutes, seconds]
            .filter((val, index) => val !== 0 || index > 0) // Skip leading zero hours if not needed
            .map(val => String(val).padStart(2, '0')) // Add leading zeros
            .join(':');
    };
    
    
  return (
    <>
                {videos.length > 0 ? (
                videos.map((video) => (
                    <Link to={`video/${video.snippet.categoryId}/${video.id}`} key={video.id} className='reduceleftgap text-zinc-300 ml-2 mt-10 float-right hover:text-zinc-500 hover:bg-zinc-950 w-[22rem]'>
                            <div  className='items-center flex flex-col justify-center '>
                                <img src={video?.snippet?.thumbnails?.standard?.url || 'not found'} alt="" className=' rounded-xl ' />
                                <span className='bg-zinc-800 px-1 rounded' style={{ position: 'relative', left: 140, bottom: 40, opacity: '80%' }}>{formatDuration(video.contentDetails.duration)}</span>
                            </div>

                            <div className='flex justify-evenly items-center mt-2'>
                                
                            {/* <img src={imgdata ? imgdata.snippet.thumbnails.default.url : ''} alt="" className='rounded-full h-14' /> */}

                                <div className='flex justify-evenly'>
                                    <span className=' font-bold w-[332px] text-justify pr-2'>{video?.snippet?.title?.slice(0,62) || ''}... </span>
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="22" height="22" fill="currentColor" className=" bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mt-1 font-semibold text-sm flex flex-col justify-evenly'>
                                <h1>{video?.snippet?.channelTitle || ''}</h1>
                                <div className='flex items-center text-center'>
                                    <h1 className='mr-3'>{converter(video?.statistics?.viewCount || '')} Views</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg>
                                    <h1>{day(moment(video?.snippet?.publishedAt || '').fromNow())}</h1></div>
                            </div>
                    </Link>
                ))) :
                (<p className='text-white text-center'>loading...</p>)}
    </>
  )
}

export default Feed