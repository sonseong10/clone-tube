import React from 'react'

const YoutubeIframe = (props) => {
  return (
    <div className="iframe-wrap">
      <div>
        <iframe
          type="text/html"
          title={props.videoTitle}
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${props.videoId.id}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YoutubeIframe
