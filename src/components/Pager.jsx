import React from 'react'

export default function Pager(props) {
  const pagesAmount = Math.ceil(props.heroList.length/10)

  if (false){ 
  return (
    <div>
      {Array(pagesAmount).fill(0).map((_, i) => {
        const filteredHeroes = props.HeroesData.slice(i, i+2)
        return (
        <button onClick={
            () => props.changeDisplay(filteredHeroes)
          }>
          
          {i+1}
          
        </button>
      )})}
    </div>
  )} else {
    return null
  }
}
