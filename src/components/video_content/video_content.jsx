import React, { memo, useState } from 'react'
import YoutubeIframe from './youtube_iframe'
import styles from './video_content.module.css'
const decode = require('unescape')

const VideoContent = memo(
  ({ video, video: { snippet }, toggleLike, toggleLikeBtn, modes }) => {
    const finishTitle = decode(snippet.title)
    const [toggleType, setToggleType] = useState(styles.hide)
    const modeType = modes === 'light' ? styles.light : styles.dark
    const handleToggle = () =>
      setToggleType(toggleType === styles.hide ? styles.show : styles.hide)

    return (
      <section className={`${styles.content} ${modeType}`}>
        <YoutubeIframe videoTitle={finishTitle} videoId={video} />
        <section className={styles.intro}>
          <h1 className={styles.title}>{finishTitle}</h1>
          <p className={styles.date}>
            {`Upload Date: ${snippet.publishedAt.substr(0, 10)}`}
          </p>
          <button className={styles.likeBtn} onClick={toggleLikeBtn}>
            {toggleLike}
          </button>
        </section>
        <section className={styles.info}>
          <div className={styles.imgWrap}>
            <img
              src={snippet.channels}
              alt="Channel Thumbnail"
              className={styles.channelLogo}
            />
          </div>
          <h3 className={styles.name}>{snippet.channelTitle}</h3>
          <button
            type="button"
            className={styles.moreBtn}
            onClick={handleToggle}
          >
            더보기
          </button>
          <pre className={`${styles.videoDesc} ${toggleType}`}>
            {snippet.description}
          </pre>
        </section>
      </section>
    )
  }
)

export default VideoContent
