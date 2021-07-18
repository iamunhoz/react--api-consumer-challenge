import React, {useState, useEffect} from 'react'

export default function HeroesGrid(props) {
  const [arrayIsValid, setArrayIsValid] = useState(props.db && props.db.length > 0)

  useEffect(() => {
    setArrayIsValid(props.db && props.db.length > 0)
  }, [props.db])

  if (arrayIsValid) {
    const heroArray = props.db.length > 10 ? props.db.slice(0, 10) : props.db
    return (
      <div className={'heroData-container'}>
        <GridColumnNames />
        {heroArray.map((hero, i) => (
          <div className={'heroData'}key={i}>
            <img className={'heroFace'}src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
            <h4 className={'heroName'}>{hero.name}</h4>
            <div>
              {hero.series.items.map((serie, i) => (
                <p className={'heroText'}key={i}>{serie.name}</p>
              ))}
            </div>
            <div>
              {hero.events.items.map((evento, i) => (
                <p className={'heroText'}key={i}>{evento.name}</p>
              ))}
            </div>
          </div>
        ))}
        <style>{`
          .heroData {
            margin: 1rem auto;
            display: grid;
            grid-template-columns: 1fr 4fr 4fr 4fr;
            background-color: #fff;
            padding: 20px;
            margin-top: 0;
          }

          .heroFace {
            width: 48px;
            height: 48px;
          }

          .heroName {
            font: normal normal bold 16px/22px PT Sans;
            letter-spacing: 0px;
            color: #555555;
          }

          .heroText {
            font: normal normal normal 14px/16px PT Sans;
            letter-spacing: 0px;
            color: #555555;
          }
        `}</style>
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

function GridColumnNames() {
  return (
    <div className={'grid-column-container'}>
      <h4 className={'grid-column-name'}>Personagem</h4>
      <h4></h4>
      <h4 className={'grid-column-name'}>Series</h4>
      <h4 className={'grid-column-name'}>Eventos</h4>
      <style>{`
        .grid-column-container {
          display: grid;
          grid-template-columns: 1fr 4fr 4fr 4fr;
          margin: 1rem auto;
          padding: 0 20px;
          margin-bottom: 0;
        }
        .grid-column-name {
          text-align: left;
          font: normal normal normal 12px/16px PT Sans;
          letter-spacing: 0px;
          color: #8E8E8E;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}