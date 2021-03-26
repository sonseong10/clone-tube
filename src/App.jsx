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

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [toggleLike, setToggleLike] = useState('Like')

  const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true')

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
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
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

  return (
    <>
      <HeaderGnb onSearch={search} modes={dark} />
      <main className={styles.container}>
        {selectedVideo && (
          <VideoContent
            video={selectedVideo}
            toggleLike={toggleLike}
            toggleLikeBtn={toggleLikeBtn}
            modes={dark}
          />
        )}
        {videos.length === 0 ? (
          <NotFoundContainer modes={dark} />
        ) : (
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            layout={selectedVideo ? 'column' : 'row'}
            setToggleLike={setToggleLike}
            modes={dark}
          />
        )}
      </main>
      <Controller onModeChange={handleModeChange} modes={dark} />
    </>
  )
}

export default App
