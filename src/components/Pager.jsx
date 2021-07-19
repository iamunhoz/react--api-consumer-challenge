import React, {useState, useEffect} from 'react'

export default function Pager(props) {
  const [arrayIsValid, setArrayIsValid] = useState(props.heroList.length > 0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setArrayIsValid(props.heroList.length > 0)
  }, [props.heroList])

  if (arrayIsValid){ 

    const pagesAmount = Math.ceil(props.heroList.length/10)

    return (
    <div className={'pager-container'}>
      <button
        className={currentPage == 1 || pagesAmount < 5 ? 'pager-button-disable' :'pager-button pager-skip'}
        onClick={
          () => {
            const filteredHeroes = props.heroList.slice(0, 10)
            props.changeDisplay(filteredHeroes)
            setCurrentPage(1)
          }
        }
      >
        {'<<'}
      </button>


      <button
        className={currentPage == 1 || pagesAmount < 5 ? 'pager-button-disable' :'pager-button pager-skip'}
        onClick={
          () => {
            const sliceStart = (currentPage - 5 > 6) ? (currentPage-5)*10 : 1
            const sliceEnd = (sliceStart)*10+10
            const filteredHeroes  = props.heroList.slice(sliceStart, sliceEnd)
            setCurrentPage(sliceStart)
            props.changeDisplay(filteredHeroes)
          }
        }
      >
        {'<'}
      </button>


      {Array(pagesAmount).fill(0).map((_, i) => {
        const page = i+1
        const filteredHeroes = props.heroList.slice(i*10, i*10+9)
        return (<div key={i}>
        <button
          className={page == currentPage ? 'pager-button-active' : 'pager-button'}
          onClick={
            () => {
              setCurrentPage(page)
              props.changeDisplay(filteredHeroes)
            }
          }
          
          >
          
          {page}
          
        </button>
   
        </div>
      )})}

      <button
        className={currentPage == pagesAmount || pagesAmount < 5 ? 'pager-button-disable' :'pager-button pager-skip'}
        onClick={
          () => {
            if (currentPage + 5 < pagesAmount) {
              const sliceStart = (currentPage+5)*10
              const sliceEnd = (sliceStart)*10+10
              const filteredHeroes  = props.heroList.slice(sliceStart, sliceEnd)
              setCurrentPage(currentPage+5)
              props.changeDisplay(filteredHeroes)

            } else {
              const sliceStart = -10
              const filteredHeroes  = props.heroList.slice(sliceStart)
              setCurrentPage(pagesAmount)
              props.changeDisplay(filteredHeroes)
            }
          }
        }
        >
          {'>'}
      </button>


      <button
        className={currentPage == pagesAmount || pagesAmount < 5 ? 'pager-button-disable' :'pager-button pager-skip'}
        onClick={
          () => {
            const filteredHeroes  = props.heroList.slice(-10)
            props.changeDisplay(filteredHeroes)
            setCurrentPage(pagesAmount)
          }
        }
        >
          {'>>'}
          
      </button>

      <style>{`
        .pager-container {
          display: flex;
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 20px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          width: 100%;
        }

        .pager-button {
          background: #F5F5F5 0% 0% no-repeat padding-box;
          border: 1px solid #E5E5E5; 
          font: normal normal normal 14px/19px PT Sans;
          letter-spacing: 0px;
          color: #555555;
          width: 40px;
          height: 32px;
          border-radius: 4px;
          margin-left: 3px;
          margin-right: 3px;
        }
        
        .pager-button:hover {
          background-color: #689FFC;
        }

        .pager-skip {
          background-color: #ffffff;
          border: 0;
        }

        .pager-button-active {
          background: #167ABC 0% 0% no-repeat padding-box;
          border: 1px solid #167ABC;
          font: normal normal normal 14px/19px PT Sans;
          letter-spacing: 0px;
          color: #ddd;
          width: 40px;
          height: 32px;
          border-radius: 4px;
          margin-left: 3px;
          margin-right: 3px;
        }

        .pager-button-disable {
          visibility: hidden;
        }
      `}</style>
    </div>
  )} else {
    return null
  }
}
