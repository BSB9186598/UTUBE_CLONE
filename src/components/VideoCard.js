import React from 'react'

const VideoCard = ({data}) => {

  return (
    <div className='box-border w-80 rounded-lg shadow-lg mt-8 mb-4 mx-2'>
      <img className="rounded-lg" src={data?.snippet?.thumbnails?.medium?.url} alt=""/>
      <ul className='p-4'>
        <li className='line-clamp-2 font-bold'>{data?.snippet?.title}</li>
        <li>{data?.snippet?.channelTitle}</li>
        <li>{data?.statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard