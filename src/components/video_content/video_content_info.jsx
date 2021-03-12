import React, { useState } from 'react'

const ContentInfo = (props) => {
  const [toggleMore, setToggleMore] = useState('hide')

  const toggleMoreBtn = () => {
    setToggleMore(toggleMore === 'hide' ? 'show' : 'hide')
  }
  return (
    <>
      <section className="content-info">
        <h1 className="content-title">{props.contentTile}</h1>
        <p className="content-date">{`Upload Date: ${props.uplodeDate}`}</p>
        <button className="like-btn" onClick={props.toggleLikeBtn}>
          {props.toggleLike}
        </button>
      </section>
      <section className="content-info">
        <h3 className="content-channel">{props.channelTitle}</h3>
        <button type="button" className="more-btn" onClick={toggleMoreBtn}>
          더보기
        </button>
        <pre className={`content-desc ${toggleMore}`}>{props.contentDesc}</pre>
      </section>
    </>
  )
}

export default ContentInfo
