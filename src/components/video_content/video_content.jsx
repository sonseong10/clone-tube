import React, { memo, useState } from 'react'
import YoutubeIframe from './youtube_iframe'
import './video_content.css'
const decode = require('unescape')

const VideoContent = memo(
  ({ video, video: { snippet }, toggleLike, toggleLikeBtn }) => {
    const finishTitle = decode(snippet.title)
    const [toggleMore, setToggleMore] = useState('hide')

    const toggleMoreBtn = () =>
      setToggleMore(toggleMore === 'hide' ? 'show' : 'hide')

    return (
      <section className="content">
        <YoutubeIframe videoTitle={finishTitle} videoId={video} />
        <section className="content-info">
          <h1 className="content-title">{finishTitle}</h1>
          <p className="content-date">
            {`Upload Date: ${snippet.publishedAt.substr(0, 10)}`}
          </p>
          <button className="like-btn" onClick={toggleLikeBtn}>
            {toggleLike}
          </button>
        </section>
        <section className="content-info">
          <div className="channel-wrap">
            <img
              src={snippet.channels}
              alt="channels img"
              className="channel-logo"
            />
          </div>
          <h3 className="content-channel">{snippet.channelTitle}</h3>
          <button type="button" className="more-btn" onClick={toggleMoreBtn}>
            더보기
          </button>
          <pre className={`content-desc ${toggleMore}`}>
            {snippet.description}
          </pre>
        </section>
      </section>
    )
  }
)

export default VideoContent
