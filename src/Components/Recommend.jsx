import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Api'
import axios from 'axios'
import moment from 'moment';
import { Link } from 'react-router-dom';
import './recommend.css'

const Recommend = ({ categoryid, converter, day }) => {
    const [videos, setvideos] = useState([])

    const fetchYouTubeData = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryid}&key=${API_KEY}`);
            setvideos(res.data.items);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    useEffect(() => {
        fetchYouTubeData()
    }, [])

    return (
        <>
            <div className='flex flex-col justify-evenly items-center mt-3'>
                {videos.length > 0 ? (videos.map((video) => {
                    return (
                        <Link to={`/video/${video.snippet.categoryid}/${video.id}`} key={video.id} className='recommendgap text-zinc-200 bg-zinc-800 h-32 mb-2 rounded-md'>
                            <div className='flex justify-evenly text-left px-2'>
                                <img src={video?.snippet?.thumbnails?.standard?.url || 'not found'} width={'200px'} height={'200px'} alt="" className='recommendimg mt-2 mr-2 overflow-hidden' />
                                <div className='flex flex-col'>
                                    <h1 className='w-48 mt-1 font-normal'>{video?.snippet?.title?.slice(0, 40) || ''}...</h1>
                                    <h1 className='mt-1 font-semibold'>{video?.snippet?.channelTitle || ''}</h1>
                                    <span className='mt-1 font-light'>{converter(video?.statistics?.viewCount || '')} Views</span>
                                    <span className='font-thin ml-[-3px]'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot inline" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                    </svg>{day(moment(video?.snippet?.publishedAt || '').fromNow())} <h1 className='bg-zinc-700 p-1 inline rounded-md mt-1'>New</h1></span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical mt-2 rotate-90" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>
                            </div>
                        </Link>
                    )
                })) : (<p className='text-white text-center'>loading...</p>)}
            </div>

        </>
    )
}

export default Recommend