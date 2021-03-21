import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import YoutubeApi from './service/youtube_api'

const youtube = new YoutubeApi(process.env.REACT_APP_YOUTUBE_API_KEY)
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
)
