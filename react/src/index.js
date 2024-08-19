import React from 'react'
import App from './App'
import axios from 'axios'
import YoutubeApi from './service/youtube_api'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const httpURL = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
})
const youtube = new YoutubeApi(httpURL)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube} />
    </BrowserRouter>
  </React.StrictMode>
)
