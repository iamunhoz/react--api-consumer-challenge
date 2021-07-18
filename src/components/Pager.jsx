import React from 'react'

export default function Pager(props) {
  const pagesAmount = Math.ceil(props.heroList.length/10)

  return (
    <div>
      {Array(pagesAmount).fill(0).map((_, i) => (
          <button onClick={
          
            () => ''
          
            }>
            
            {i+1}
            
          </button>
      ))}
    </div>
  )
}
