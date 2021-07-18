import md5 from 'md5'
import {PRIVATE_KEY, PUBLIC_KEY} from './../../secrets'

const requestFromMarvel = async (resource:string, options?:string|undefined|null) => {
  const timeStamp = Date.now()
  const hash = md5(timeStamp.toString() + PRIVATE_KEY + PUBLIC_KEY)
  const server = 'http://gateway.marvel.com/v1/public/'
  const URL = () => `${server}${resource}?ts=${timeStamp}&limit=100&apikey=${PUBLIC_KEY}&hash=${hash}${options}`
  console.log(`requisition param: ${URL()}`)
  
  try {
    const response = await fetch(URL(), {
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

export {requestFromMarvel}
