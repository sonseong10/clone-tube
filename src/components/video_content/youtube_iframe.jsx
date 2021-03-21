import React from 'react'
import styles from './video_content.module.css'

const YoutubeIframe = (props) => {
  return (
    <article className={styles.video}>
      <div className={styles.iframeWrap}>
        <iframe
          type="text/html"
          title={props.videoTitle}
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${props.videoId.id}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </article>
  )
}

export default YoutubeIframe
