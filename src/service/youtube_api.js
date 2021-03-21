const decode = require('unescape')

class YoutubeApi {
  constructor(key) {
    this.key = key
    this.channels = []
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    this.channels.splice(0, this.channels.length)
    result.items.map((item) => {
      const setResult = { ...item, title: decode(item.snippet.title) }
      return this.channels.push(
        this.setChannelItem(setResult.snippet.channelId, setResult)
      )
    })

    return Promise.all(this.channels).then((values) => values)
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    this.channels.splice(0, this.channels.length)
    result.items.map((item) => {
      const setResult = {
        ...item,
        id: item.id.videoId,
        title: decode(item.snippet.title),
      }
      return this.channels.push(
        this.setChannelItem(setResult.snippet.channelId, setResult)
      )
    })

    return Promise.all(this.channels).then((values) => values)
  }

  async setChannelItem(channelId, item) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${this.key}`,
      this.getRequestOption
    )
    const result = await response.json()
    item.snippet.channels = result.items[0].snippet.thumbnails.medium.url

    return Promise.resolve(item)
  }
}

export default YoutubeApi
