import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../Api";
import { Link, useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: query,
            maxResults: 20,
            type: "video",
            key: API_KEY,
          },
        }
      );
      setVideos(res.data.items);
    };

    fetchSearchResults();
  }, [query]);

 return (
  <div className="pt-4 md:pt-6 px-4 text-white">

    {/* 🔹 Skeleton loading */}
    {videos.length === 0 &&
      [...Array(6)].map((_, i) => (
        <div key={i} className="flex gap-4 mb-4">
          <Skeleton className="w-40 h-24 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-1/2 mt-2" />
          </div>
        </div>
      ))
    }

    {/* 🔹 Actual search results */}
    {videos.length > 0 &&
      videos.map((video) => (
        <Link
          to={`/video/search/${video.id.videoId}`}
          key={video.id.videoId}
          className="flex flex-col sm:flex-row gap-4 mb-6 items-start hover:bg-zinc-900 p-2 rounded-lg"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            className="rounded-lg w-64 h-36 object-cover"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-lg line-clamp-2">
              {video.snippet.title}
            </h1>
            <p className="text-sm text-zinc-400">
              {video.snippet.channelTitle}
            </p>
            <p className="text-sm text-zinc-500 line-clamp-2">
              {video.snippet.description}
            </p>
          </div>
        </Link>
      ))
    }
  </div>
);

};

export default SearchResults;
