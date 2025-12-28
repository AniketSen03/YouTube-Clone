import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Api'
import axios from 'axios'
import moment from 'moment';
import { Link } from 'react-router-dom';
import Skeleton from './Skeleton';

const Recommend = ({ categoryid, videoid, converter, day }) => {
    const [videos, setvideos] = useState([])

    const fetchYouTubeData = async () => {
        try {
            let url = "";

            if (categoryid === "search") {
                // RELATED VIDEOS (for search)
                url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoid}&type=video&maxResults=20&key=${API_KEY}`;
            } else {
                // CATEGORY VIDEOS (for home / trending / music etc)
                url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&videoCategoryId=${categoryid}&key=${API_KEY}`;
            }

            const res = await axios.get(url);
            setvideos(res.data.items);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchYouTubeData()
    }, [categoryid, videoid])

return (
  <div className="flex flex-col gap-3">

    {/* 🔹 Skeleton */}
    {videos.length === 0 &&
      [...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <Skeleton className="w-32 h-20 rounded-lg" />
          <div>
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-28 mt-1" />
          </div>
        </div>
      ))
    }

    {/* 🔹 Recommended videos */}
    {videos.length > 0 &&
      videos.map((video) => {
        const videoId =
          categoryid === "search" ? video.id.videoId : video.id;

        return (
          <Link
            to={`/video/${categoryid === "search" ? "search" : video.snippet.categoryId}/${videoId}`}
            key={videoId}
            className="flex gap-3 hover:bg-zinc-900 p-2 rounded-lg"
          >
            <div className="relative w-40 flex-shrink-0">
              <img
                src={video?.snippet?.thumbnails?.medium?.url}
                className="rounded-lg w-full h-[90px] object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col text-zinc-200">
              <h1 className="text-sm font-medium line-clamp-2">
                {video.snippet.title}
              </h1>
              <p className="text-xs text-zinc-400 mt-1">
                {video.snippet.channelTitle}
              </p>
            </div>
          </Link>
        );
      })}
  </div>
);


}

export default Recommend