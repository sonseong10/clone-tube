import React from 'react'
import VideoItem from '../video_item/video_item'
import './video_list.css'

const VideoList = ({ videos, onVideoClick, layout, setToggleLike }) => {
  return (
    <ul className="video__card-list">
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          layout={layout}
          setToggleLike={setToggleLike}
        />
      ))}
    </ul>
  )
}

export default VideoList
