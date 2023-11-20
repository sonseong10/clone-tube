import React, { memo } from 'react'
import styles from '../../assets/style/video_item.module.css'
import elapsedTime from '../../utils/elapsedTime'

const VideoItem = memo(
  ({
    video,
    video: { snippet },
    onVideoClick,
    layout,
    setToggleLike,
    modes,
    setTitle,
  }) => {
    const listLayout = layout === 'column' ? styles.column : styles.row
    const modeType = modes === true ? styles.dark : styles.light

    const onClickUpdateTitle = () => setTitle(`${video.title} | CloneTube`)

    return (
      <li
        className={`${styles.item} ${listLayout} ${modeType}`}
        onClick={() => {
          onVideoClick(video)
          onClickUpdateTitle()
          setToggleLike('Like')
        }}
      >
        <section className={styles.thumbnail}>
          <img
            src={snippet.thumbnails.medium.url}
            alt="Video Thumbnail"
            className={styles.img}
          />
        </section>
        <section className={styles.info}>
          <div className={styles.left}>
            <img
              src={snippet.channels}
              alt="channels img"
              className={styles.channelLogo}
            />
          </div>
          <div className="info-right">
            <h3 className={styles.title}>{video.title}</h3>
            <p className={styles.desc}>
              {snippet.channelTitle} • {elapsedTime(snippet.publishedAt)}
            </p>
          </div>
        </section>
      </li>
    )
  }
)

export default VideoItem
