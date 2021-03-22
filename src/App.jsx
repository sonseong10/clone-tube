import './assets/style/reset.css'
import './assets/style/normalize.css'
import './assets/style/font.css'
import './assets/style/App.css'
import styles from './assets/style/layout.module.css'
import './assets/style/dark.css'

import { useCallback, useEffect, useState } from 'react'
import HeaderGnb from './components/header_gnb/header_gnb'
import VideoList from './components/video_list/video_list'
import NotFoundContainer from './components/search_error.jsx/not_found_video'
import VideoContent from './components/video_content/video_content'
import Controller from './components/ui/controller'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [modes, setModes] = useState('light')
  const [activeIcon, setActiveIcon] = useState('inactive')
  const [toggleLike, setToggleLike] = useState('Like')

  const toggleLikeBtn = () => {
    setToggleLike(toggleLike === 'Like' ? 'Liked' : 'Like')
  }

  const handleModeChange = (event) => {
    event.preventDefault()
    document.body.classList.toggle('dark')
    setModes(modes === 'light' ? 'dark' : 'light')
    setActiveIcon(activeIcon === 'inactive' ? 'active' : 'inactive')
    event.target.blur()
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
      <HeaderGnb onSearch={search} modes={modes} />
      <main className={styles.container}>
        {selectedVideo && (
          <VideoContent
            video={selectedVideo}
            toggleLike={toggleLike}
            toggleLikeBtn={toggleLikeBtn}
            modes={modes}
          />
        )}
        {videos.length === 0 ? (
          <NotFoundContainer modes={modes} />
        ) : (
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            layout={selectedVideo ? 'column' : 'row'}
            setToggleLike={setToggleLike}
            modes={modes}
          />
        )}
      </main>
      <Controller
        onModeChange={handleModeChange}
        activeIcon={activeIcon}
        modes={modes}
      />
    </>
  )
}

export default App
