import React, { memo } from 'react'
import ContentInfo from './video_content_info'
import YoutubeIframe from './youtube_iframe'
import './video_content.css'
const decode = require('unescape')

const VideoContent = memo(
  ({ video, video: { snippet }, toggleLike, toggleLikeBtn }) => {
    const finishTitle = decode(snippet.title)
    return (
      <section className="content">
        <YoutubeIframe videoTitle={finishTitle} videoId={video} />
        <ContentInfo
          video={video}
          videoTitle={finishTitle}
          toggleLike={toggleLike}
          toggleLikeBtn={toggleLikeBtn}
        />
      </section>
    )
  }
)

export default VideoContent
