import React, { useState, useEffect } from 'react'
import {requestFromMarvel} from './api/fetcher'
import './App.css'



function App() {
  const [heroesData, setHeroesData] = useState({})

  const getData = async () => {
    const data = await requestFromMarvel('characters', '')
    setHeroesData(data)
    console.log(data.data.results)
  }

  return (
    <div className={'container'}>
      <h1>Busca de Personagens</h1>
      
      <button onClick={getData}>fetch</button>

      {heroesData.data?.results && 
        heroesData.data.results.map((hero, i) => (
          <div key={i}>
            <img className={'heroFace'}src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
            <h4>{hero.name}</h4>  
          </div>
        ))
      }

      <style jsx>{`
        .container {
          background-color: #555;
          color: #ddd;
          height: 100vh;
          width: 100vw;
        }

        .heroFace {
          width: 3.5rem;
          height: 3.5rem;
        }
      `}</style>
    </div>
  )
}

export default App
