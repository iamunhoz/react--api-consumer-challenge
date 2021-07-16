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

/* 
const PRIVATE_KEY = import.meta.env.REACT_APP_PRIVATE_KEY //'2c54a63d3f5a8f631e06fb3ffee5862853da3011'
const PUBLIC_KEY = import.meta.env.REACT_APP_PUBLIC_KEY //'7737b3447b9f5b2aefdd72eadda232e9'
const returnKeys = () => {
  if (PRIVATE_KEY && PUBLIC_KEY) {
    return PRIVATE_KEY.toString() + PUBLIC_KEY.toString()
  }
}

const API_KEY = returnKeys()
*/