import React from 'react'

export default function TopBar() {
  return (<>
    <div className={'topbar-container'}>
      <img src='/logo.svg'></img>
      <div>
        <span>Nome do Candidato</span>
        <span>Ivã A. Munhoz</span>
        <button>CB</button>
      </div>
    </div>
    <style jsx>{`
      .topbar-container {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
      }
    `}</style></>
  )
}