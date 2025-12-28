import React from 'react'
import Playvideo from './Playvideo'
import { useParams } from 'react-router-dom'
import Recommend from './Recommend';

const Video = ({ converter, day }) => {
  const { videoid, categoryid } = useParams();
  const finalCategory = categoryid || "search";

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 pt-4 max-w-[1800px] mx-auto
    ">
      {/* Video Player */}
      <div className="flex-1">
        <Playvideo videoid={videoid} converter={converter} day={day} />
      </div>

      {/* Recommendations */}
      <div className="w-full lg:w-[400px]">
        <Recommend
          categoryid={finalCategory}
          videoid={videoid}
          converter={converter}
          day={day}
        />
      </div>
    </div>
  );
};


export default Video