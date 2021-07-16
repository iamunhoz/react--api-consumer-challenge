import md5 from 'md5'
import {PRIVATE_KEY, PUBLIC_KEY} from './../../secrets'
//state

const API_KEY = PRIVATE_KEY + PUBLIC_KEY

const askForHeroesData = async () => {
  const timeStamp = Date.now()
  const hash = md5(timeStamp.toString() + API_KEY)
  const URL = () => `http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
  try {
    let response = await fetch(URL(), {
      method: 'GET',
        headers: {
        Accept: '*/*'
      }
    })
    return await response.json()
  } catch(e) {
    console.log(e)
  }
}

export {askForHeroesData}
