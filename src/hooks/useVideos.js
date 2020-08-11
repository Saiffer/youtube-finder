import { useState, useEffect } from 'react'
import youtube from '../api/youtube'
const KEY = 'AIzaSyBatVFLTDQmi5Ypb4RKQIHnvT-lxjzMoJg'
const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([])
  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    })
    setVideos(response.data.items)
  }
  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  return [videos, search]
}

export default useVideos
