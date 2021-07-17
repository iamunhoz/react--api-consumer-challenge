import React, { useState } from 'react'
import {requestFromMarvel} from './api/fetcher'
import TopBar from './components/TopBar'

function App() {
  const [heroesData, setHeroesData] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const testterm = 'spider'

  const getData = async () => {
    requestFromMarvel(
      'characters',
      `nameStartsWith=${searchTerm}`
    ).then(data => {
      setHeroesData(data)
      console.log(data.data.results)
    })
   
  }
  
  const handleSubmit = async () => {
    console.log('search requested')
    requestFromMarvel(
      'characters',
      `nameStartsWith=${testterm}`
    ).then(data => {
      setHeroesData(data)
      console.log(data)
    })

  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className={'container'}>
      <TopBar />
      <h1>Busca de Personagens</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Busca por Nome:
          <input
            type="text"
            name="name"
            value={searchTerm}
            onChange={handleChange}
          />
        </label>
      </form>
      
      <button onClick={getData}>fetch</button>

      {heroesData.data?.results && 
        <div>
          <h5>Series</h5>
          <h5>Events</h5>
          {heroesData.data.results.map((hero, i) => (
            <div className={'heroData'}key={i}>
              <img className={'heroFace'}src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
              <h4>{hero.name}</h4>
              <div>
                {hero.series.items.map(serie => (
                  <p>{serie.name}</p>
                ))}
              </div>
              <div>
                {hero.events.items.map(evento => (
                  <p>{evento.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      }

      <style jsx>{`
        .container {
          background-color: #aaa;
          min-height: 100vh;
          width: 100%;
          margin-bottom: 20px;
        }

        .heroData {
          margin: 1rem auto;
          display: grid;
          grid-template-columns: 10% 30% 30% 30%;
          background-color: #fff;
          width: 80%;
          padding: 20px;
        }

        .heroFace {
          width: 48px;
          height: 48px;
        }
      `}</style>
    </div>
  )
}

export default App
