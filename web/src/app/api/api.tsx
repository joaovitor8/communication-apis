import axios from "axios"

interface CatAPI {}

export const CatApi = () => {
  let cat

  axios.get('https://http.cat/')
  .then(res => {cat = res.data})

  return cat
}

