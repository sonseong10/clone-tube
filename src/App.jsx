import './assets/style/reset.css'
import './assets/style/normalize.css'
import './assets/style/font.css'
import './assets/style/App.css'

import HeaderGnb from './components/header_gnb/header_gnb'
import VideoList from './components/video_list/video_list'
import { useEffect, useState } from 'react'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos))
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos))
  }, [youtube])

  return (
    <>
      <HeaderGnb onSearch={search} />
      <main className="container">
        <VideoList videos={videos} />
      </main>
    </>
  )
}

export default App
