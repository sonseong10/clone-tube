import React, { memo, useEffect, useState } from 'react'
import styles from '../../assets/style/video_item.module.css'

const VideoItem = memo(
  ({
    video,
    video: { snippet },
    onVideoClick,
    layout,
    setToggleLike,
    modes,
  }) => {
    const [title, setTitle] = useState('CloneTube')
    const listLayout = layout === 'column' ? styles.column : styles.row
    const modeType = modes === 'light' ? styles.light : styles.dark

    useEffect(() => {
      document.title = title
    }, [title])

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
              {snippet.channelTitle} • Upload Date:{' '}
              {snippet.publishedAt.substr(0, 10)}
            </p>
          </div>
        </section>
      </li>
    )
  }
)

export default VideoItem
