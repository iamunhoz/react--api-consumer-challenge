import React, { useState, useEffect } from 'react'
import { requestFromMarvel } from './api/fetcher'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import HeroesGrid from './components/HeroesGrid'
import Pager from './components/Pager'

function App() {
  const [heroesData, setHeroesData] = useState({})
  const [searchTerm, setSearchTerm] = useState('Iron Man')

  const getData = async (offset) => {
    requestFromMarvel(
      'characters',
      `&nameStartsWith=${searchTerm}`
    ).then(data => {
      setHeroesData(data)
      console.log(data)
    })
  }
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(getData, [])

  return (
    <div className={'container'}>
      <TopBar />
      <h1>Busca de Personagens</h1>
      <SearchBar inputValue={searchTerm} inputOnChange={handleChange} submitAction={getData} />

      <HeroesGrid db={heroesData} />   

      <style>{`
        .container {
          background-color: #aaa;
          min-height: 100vh;
          width: 100%;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}

export default App

//    {heroesData && <Pager heroListLength={heroesData.data?.total} submitAction={getData} />}