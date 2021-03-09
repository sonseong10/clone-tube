import React from 'react'
import './video_item.css'

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className="list-item">
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
