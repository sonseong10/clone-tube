import React, { memo, useEffect, useState } from 'react'
import './video_item.css'
const decode = require('unescape')

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, layout, setToggleLike }) => {
    const [title, setTitle] = useState('CloneTube')
    const listLayout = layout === 'column' ? 'column' : ''
    const finishTitle = decode(snippet.title)

    useEffect(() => {
      document.title = title
    }, [title])

    const onClickUpdateTitle = () => setTitle(`${finishTitle} | CloneTube`)

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
          <h3 className="video-title">{finishTitle}</h3>
          <p className="video-desc">
            {snippet.channelTitle} • Upload Date:{' '}
            {snippet.publishedAt.substr(0, 10)}
          </p>
        </section>
      </li>
    )
  }
)

export default VideoItem
