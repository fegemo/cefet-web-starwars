const cache = {}

export const friendlyFetch = async url => {
  const cached = JSON.parse(localStorage.getItem(url))
  if (cached) {
    console.log('Got from cache')
    return cached
  }
  const result = await fetch(url)
  const response = await result.json()
  localStorage.setItem(url, JSON.stringify(response))
  return response
}