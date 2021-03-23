import React, { memo } from 'react'
import VideoItem from '../video_item/video_item'
import styles from '../../assets/style/video_list.module.css'

const VideoList = memo(
  ({ videos, onVideoClick, layout, setToggleLike, modes }) => {
    const listLayout = layout === 'column' ? styles.column : styles.row
    return (
      <ul className={`${styles.list} ${listLayout}`}>
        {videos.map((video) => (
          <VideoItem
            key={video.etag}
            video={video}
            onVideoClick={onVideoClick}
            layout={layout}
            setToggleLike={setToggleLike}
            modes={modes}
          />
        ))}
      </ul>
    )
  }
)

export default VideoList
