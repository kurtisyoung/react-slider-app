export function fetchAPI() {
  return fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=30&apikey=${process.env.REACT_APP_API_KEY}`)
}