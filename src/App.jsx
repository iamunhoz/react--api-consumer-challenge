import React, { useState, useEffect } from 'react'
import { requestFromMarvel } from './api/fetcher'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import HeroesGrid from './components/HeroesGrid'
import Pager from './components/Pager'
import PageTitle from './components/PageTitle'

function App() {
  const [heroesData, setHeroesData] = useState({})
  const [heroesToDisplay, setHeroesToDisplay] = useState([])
  const [searchTerm, setSearchTerm] = useState('Iron Man')

  const getData = async () => {
    requestFromMarvel(
      'characters',
      `&nameStartsWith=${searchTerm}`
    ).then(response => {
      setHeroesData(response.data.results)
    })
  }
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(getData,[])
  useEffect(() => setHeroesToDisplay(heroesData),[heroesData])

  return (
    <div className={'app-container'}>
      <TopBar />

      <main>
        <PageTitle />
        
        <SearchBar
          inputValue={searchTerm}
          inputOnChange={handleChange}
          submitAction={getData}
        />
        <HeroesGrid db={heroesToDisplay} />
      </main>
      
      <Pager heroList={heroesData} changeDisplay={setHeroesToDisplay}/>

      <style>{`
        .app-container {
          background: #E5E5E5 0% 0% no-repeat padding-box;
          min-height: 100vh;
          width: 100%;
        }

        main {
          width: 80%;
          margin: 0 auto;
          padding-top: 50px;
        }
      `}</style>
    </div>
  )
}

export default App
