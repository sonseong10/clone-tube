import React, { useEffect, useState } from 'react'
import './video_item.css'

const VideoItem = ({
  video,
  video: { snippet },
  onVideoClick,
  layout,
  setToggleLike,
}) => {
  const [title, setTitle] = useState('CloneTube')
  const listLayout = layout === 'column' ? 'column' : ''

  useEffect(() => {
    document.title = title
  }, [title])

  const onClickUpdateTitle = () => setTitle(`${snippet.title} | CloneTube`)

  return (
    <li
      className={`list-item ${listLayout}`}
      onClick={() => {
        onVideoClick(video)
        onClickUpdateTitle()
        setToggleLike('Like')
      }}
    >
      <section className="thumbnail">
        <img
          src={snippet.thumbnails.medium.url}
          alt="Video Thumbnail"
          className="video-img"
        />
      </section>
      <section className="video-info">
        <h3 className="video-title">{snippet.title}</h3>
        <p className="video-desc">
          {snippet.channelTitle} • Upload Date:{' '}
          {snippet.publishedAt.substr(0, 10)}
        </p>
      </section>
    </li>
  )
}

export default VideoItem
