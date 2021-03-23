const decode = require('unescape')

class YoutubeApi {
  constructor(httpURL) {
    this.youtubeAPI = httpURL
    this.channels = []
  }

  async mostPopular() {
    const response = await this.youtubeAPI.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '24',
        regionCode: 'KR',
      },
    })

    this.channels.splice(0, this.channels.length)
    response.data.items.map((item) => {
      const setResult = { ...item, title: decode(item.snippet.title) }
      return this.channels.push(
        this.setChannelItem(setResult.snippet.channelId, setResult)
      )
    })

    return Promise.all(this.channels).then((values) => values)
  }

  async search(query) {
    const response = await this.youtubeAPI.get('search', {
      params: {
        part: 'snippet',
        q: query,
        maxResults: '24',
        type: 'video',
      },
    })

    this.channels.splice(0, this.channels.length)
    response.data.items.map((item) => {
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
    const response = await this.youtubeAPI.get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    })
    item.snippet.channels = response.data.items[0].snippet.thumbnails.medium.url
    return Promise.resolve(item)
  }
}

export default YoutubeApi
