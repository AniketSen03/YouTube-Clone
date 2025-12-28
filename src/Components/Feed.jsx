import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Api'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './feed.css'
import Skeleton from './Skeleton';

const Feed = ({ category, converter, day }) => {
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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">

    {/* Skeleton loading */}
    {videos.length === 0 &&
      [...Array(8)].map((_, i) => (
        <div key={i}>
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-4 mt-2 w-3/4" />
          <Skeleton className="h-3 mt-1 w-1/2" />
        </div>
      ))
    }

    {/* Videos */}
    {videos.length > 0 &&
      videos.map((video) => (
        <Link
          to={`video/${video.snippet.categoryId}/${video.id}`}
          key={video.id}
          className="text-zinc-200 hover:text-white"
        >
          {/* Thumbnail */}
          <div className="relative">
            <img
              src={video?.snippet?.thumbnails?.medium?.url}
              alt=""
              className="w-full rounded-xl"
            />
            <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-[2px] rounded">
              {formatDuration(video.contentDetails.duration)}
            </span>
          </div>

          {/* Info */}
          <div className="mt-2">
            <h3 className="font-semibold text-sm leading-snug line-clamp-2">
              {video?.snippet?.title}
            </h3>

            <p className="text-zinc-400 text-sm mt-1">
              {video?.snippet?.channelTitle}
            </p>

            <p className="text-zinc-400 text-sm">
              {converter(video?.statistics?.viewCount)} views •{" "}
              {day(moment(video?.snippet?.publishedAt).fromNow())}
            </p>
          </div>
        </Link>
      ))
    }

  </div>
);

}

export default Feed