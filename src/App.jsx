import React, { useState, useEffect } from 'react'
import {askForHeroesData} from './api/fetcher'
import './App.css'



function App() {
  const [heroesData, setHeroesData] = useState({})

  const getData = async () => {
    const data = await askForHeroesData()
    setHeroesData(data)
    console.log(data)
    console.log(data.copyright)
  }

  return (
    <div>
      <h1>Busca de Personagens</h1>
      
      <button onClick={getData}>fetch</button>
      
      {heroesData.data && <p>{`${heroesData.data}`}</p>}
      
      {heroesData.copyright && <p>{`${heroesData.copyright}`}</p>}
    </div>
  )
}

export default App
