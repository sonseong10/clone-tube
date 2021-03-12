import React from 'react'
import ContentInfo from './video_content_info'
import YoutubeIframe from './youtube_iframe'
import './video_content.css'

const VideoContent = ({
  video,
  video: { snippet },
  toggleLike,
  toggleLikeBtn,
}) => {
  return (
    <section className="content">
      <YoutubeIframe videoTitle={snippet.title} videoId={video} />
      <ContentInfo
        contentTile={snippet.title}
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
