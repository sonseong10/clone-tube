import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'
import YoutubeApi from './service/youtube_api'

const httpURL = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
})

const youtube = new YoutubeApi(httpURL)
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
)
