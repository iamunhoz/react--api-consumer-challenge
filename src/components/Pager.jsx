import React, {useState, useEffect} from 'react'

export default function Pager(props) {
  const [arrayIsValid, setArrayIsValid] = useState(props.heroList.length > 0)

  useEffect(() => {
    setArrayIsValid(props.heroList.length > 0)
  }, [props.heroList])

  if (arrayIsValid){ 
  const pagesAmount = Math.ceil(props.heroList.length/10)
  console.log(`pagesAmount=${pagesAmount}&props.heroList.length=${props.heroList.length}`)
  return (
    <div>
      {Array(pagesAmount).fill(0).map((_, i) => {
        const filteredHeroes = props.heroList.slice(i*10, i*10+9)
        return (<div>
        <button
          key={i}
          className={'pager-button'}
          onClick={
            () => props.changeDisplay(filteredHeroes)
          }
          
          >
          
          {i+1}
          
        </button>
   
        </div>
      )})}
      <style>{`
        .pager-button {
          background: #F5F5F5 0% 0% no-repeat padding-box;
          border: 1px solid #E5E5E5; 
          font: normal normal normal 14px/19px PT Sans;
          letter-spacing: 0px;
          color: #555555;
          width: 40px;
          height: 32px;
        }
      `}</style>
    </div>
  )} else {
    return <div>error</div>
  }
}
