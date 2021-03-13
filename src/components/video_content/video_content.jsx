import React from 'react'
import ContentInfo from './video_content_info'
import YoutubeIframe from './youtube_iframe'
import './video_content.css'
const decode = require('unescape')

const VideoContent = ({
  video,
  video: { snippet },
  toggleLike,
  toggleLikeBtn,
}) => {
  const finishTitle = decode(snippet.title)
  return (
    <section className="content">
      <YoutubeIframe videoTitle={finishTitle} videoId={video} />
      <ContentInfo
        contentTile={finishTitle}
        contentDesc={snippet.description}
        uplodeDate={snippet.publishedAt.substr(0, 10)}
        channelTitle={snippet.channelTitle}
        toggleLike={toggleLike}
        toggleLikeBtn={toggleLikeBtn}
      />
    </section>
  )
}

export default VideoContent
