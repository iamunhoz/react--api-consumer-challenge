import React, {useState, useEffect} from 'react'

export default function Pager(props) {
  const [arrayIsValid, setArrayIsValid] = useState(props.heroList.length > 0)

  useEffect(() => {
    setArrayIsValid(props.heroList.length > 0)
  }, [props.heroList])

  if (arrayIsValid){ 
  const pagesAmount = Math.ceil(props.heroList.length/10)
  return (
    <div>
      {Array(pagesAmount).fill(0).map((_, i) => {
        const filteredHeroes = props.heroList.slice(i, i+2)
        return (
        <button onClick={
            () => props.changeDisplay(filteredHeroes)
          }>
          
          {i+1}
          
        </button>
      )})}
    </div>
  )} else {
    return <div>error</div>
  }
}
