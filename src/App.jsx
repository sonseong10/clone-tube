import './assets/common/reset.css'
import './assets/common/normalize.css'
import './assets/common/font.css'
import styles from './assets/style/layout.module.css'

import { useCallback, useEffect, useState } from 'react'
import HeaderGnb from './components/header_gnb/header_gnb'
import VideoList from './components/video_list/video_list'
import NotFoundContainer from './components/search_error.jsx/not_found_video'
import VideoContent from './components/video_content/video_content'
import Controller from './components/ui/controller'
import { Link } from 'react-router-dom'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [toggleLike, setToggleLike] = useState('Like')
  const [title, setTitle] = useState('CloneTube')

  const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true')

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    localStorage.setItem('darkMode', dark)
  }, [dark])

  const toggleLikeBtn = () => {
    setToggleLike(toggleLike === 'Like' ? 'Liked' : 'Like')
  }

  const handleModeChange = (event) => {
    onBodyChange()
    setDark(!dark)
    event.target.blur()
  }

  function onBodyChange() {
    document.body.classList.toggle('dark')
  }

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos)
          setSelectedVideo(null)
        })
    },
    [youtube]
  )

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
  }, [youtube])

  const selectVideo = useCallback((video) => {
    window.scrollTo({ top: 0 })
    setSelectedVideo(video)
  }, [])

  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    })
  }, [])

  return (
    <>
      <HeaderGnb onSearch={search} modes={dark} />
      <div className={styles.wrapper}>
        {!selectedVideo && (
          <aside
            className={`${styles.gnb} ${dark ? styles.dark : styles.light}`}
          >
            <nav>
              <div>
                <ul>
                  <li>
                    <Link
                      to={void 0}
                      className={`${styles.isActive} ${
                        dark ? styles.dark : styles.light
                      }`}
                    >
                      홈
                    </Link>
                  </li>
                  <li>
                    <Link to={void 0}>Shorts</Link>
                  </li>
                  <li>
                    <Link to={void 0}>구독</Link>
                  </li>
                  <li>
                    <Link to={void 0}>Originals</Link>
                  </li>
                  <li>
                    <Link to={void 0}>YouTube Music</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to={void 0}>보관함</Link>
                  </li>
                  <li>
                    <Link to={void 0}>시청 기록</Link>
                  </li>
                  <li>
                    <Link to={void 0}>내 동영상</Link>
                  </li>
                  <li>
                    <Link to={void 0}>나중에 볼 동영상</Link>
                  </li>
                  <li>
                    <Link to={void 0}>오프라인 저장 동영상</Link>
                  </li>
                  <li>
                    <Link to={void 0}>좋아요 표시한 동영상</Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong>구독</strong>
              </div>
              <div>
                <strong>탐색</strong>
                <ul>
                  <li>
                    <Link to={void 0}>인기 급상승</Link>
                  </li>
                  <li>
                    <Link to={void 0}>쇼핑</Link>
                  </li>
                  <li>
                    <Link to={void 0}>음악</Link>
                  </li>
                  <li>
                    <Link to={void 0}>영화</Link>
                  </li>
                  <li>
                    <Link to={void 0}>실시간</Link>
                  </li>
                  <li>
                    <Link to={void 0}>게임</Link>
                  </li>
                  <li>
                    <Link to={void 0}>스포츠</Link>
                  </li>
                  <li>
                    <Link to={void 0}>학습</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Link to={void 0}>설정</Link>
                  </li>
                  <li>
                    <Link to={void 0}>신고 기록</Link>
                  </li>
                  <li>
                    <Link to={void 0}>고객센터</Link>
                  </li>
                  <li>
                    <Link to={void 0}>의견 보내기</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        )}

        <main
          className={`${styles.container} ${
            selectedVideo || !isActive ? '' : styles.isOpen
          }`}
        >
          {selectedVideo && (
            <VideoContent
              video={selectedVideo}
              toggleLike={toggleLike}
              toggleLikeBtn={toggleLikeBtn}
              modes={dark}
            />
          )}
          {videos.length === 0 ? (
            <NotFoundContainer modes={dark} setTitle={setTitle} />
          ) : (
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              layout={selectedVideo ? 'column' : 'row'}
              setToggleLike={setToggleLike}
              modes={dark}
              setTitle={setTitle}
            />
          )}
        </main>
      </div>
      <Controller onModeChange={handleModeChange} modes={dark} />
    </>
  )
}

export default App
