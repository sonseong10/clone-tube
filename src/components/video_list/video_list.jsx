import React from 'react'
import VideoItem from '../video_item/video_item'
import './video_list.css'

const VideoList = (props) => {
  return (
    <ul className="video__card-list">
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  )
}

export default VideoList
