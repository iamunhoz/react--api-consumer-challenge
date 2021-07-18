import React, {useState, useEffect} from 'react'


export default function HeroesGrid(props) {
  const [arrayIsValid, setArrayIsValid] = useState(props.db && props.db.length > 0)

  useEffect(() => {
    setArrayIsValid(props.db && props.db.length > 0)
  }, [props.db])

  console.log("Received HeroesGridProps:")
  console.log(props.db)
  if (arrayIsValid) {
    const heroArray = props.db.length > 10 ? props.db.slice(0, 10) : props.db
    return (
      <div>
        <h5>Series</h5>
        <h5>Events</h5>
        {heroArray.map((hero, i) => (
          <div className={'heroData'}key={i}>
            <img className={'heroFace'}src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}></img>
            <h4>{hero.name}</h4>
            <div>
              {hero.series.items.map((serie, i) => (
                <p key={i}>{serie.name}</p>
              ))}
            </div>
            <div>
              {hero.events.items.map((evento, i) => (
                <p key={i}>{evento.name}</p>
              ))}
            </div>
          </div>
        ))}
        <style>{`
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
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}
