import './assets/style/reset.css'
import './assets/style/normalize.css'
import './assets/style/font.css'
import './assets/style/App.css'
import './assets/style/layout.css'
import './assets/style/dark.css'

import HeaderGnb from './components/header_gnb/header_gnb'
import VideoList from './components/video_list/video_list'
import { useEffect, useState } from 'react'
import NotFoundContainer from './components/search_error.jsx/not_found_video'
import VideoContent from './components/video_content/video_content'
import Controller from './components/ui/controller'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [toggleLike, setToggleLike] = useState('Like')

  const toggleLikeBtn = () => {
    setToggleLike(toggleLike === 'Like' ? 'Liked' : 'Like')
  }

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos)
        setSelectedVideo(null)
      })
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
  }, [youtube])

  const selectVideo = (video) => {
    setSelectedVideo(video)
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <HeaderGnb onSearch={search} />
      <main className="container">
        {selectedVideo && (
          <VideoContent
            video={selectedVideo}
            toggleLike={toggleLike}
            toggleLikeBtn={toggleLikeBtn}
          />
        )}
        {videos.length === 0 ? (
          <NotFoundContainer />
        ) : (
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            layout={selectedVideo ? 'column' : 'row'}
            setToggleLike={setToggleLike}
          />
        )}
      </main>
      <Controller />
    </>
  )
}

export default App
