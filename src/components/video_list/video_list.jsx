import React, { memo } from 'react'
import VideoItem from '../video_item/video_item'
import './video_list.css'

const VideoList = memo(({ videos, onVideoClick, layout, setToggleLike }) => {
  return (
    <ul className="video__card-list">
      {videos.map((video) => (
        <VideoItem
          key={video.etag}
          video={video}
          onVideoClick={onVideoClick}
          layout={layout}
          setToggleLike={setToggleLike}
        />
      ))}
    </ul>
  )
})

export default VideoList
