import React from 'react'


export default function HeroesGrid(props) {
  if (props.db.data?.results) {
    return (
      <div>
        <h5>Series</h5>
        <h5>Events</h5>
        {props.db.data.results.map((hero, i) => (
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
