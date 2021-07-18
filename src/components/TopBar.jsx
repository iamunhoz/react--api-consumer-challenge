import React from 'react'

export default function TopBar() {
  return (<>
    <div className={'topbar-container'}>
      <img className={'vertical-align topbar-logo'} src='/logo.svg'></img>
      <div className={'vertical-align topbar-right'}>
        <span className={'topbar-description'}>Nome do Candidato</span>
        <span>Ivã A. Munhoz</span>
        <button className={'topbar-bold topbar-button'}>CB</button>
      </div>
    </div>
    <style>{`
      .topbar-container {
        width: 100%;
        height: 100px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
      }

      .topbar-logo {
        width: 96px;
        height: 24px;
      }

      .vertical-align {
        height: 50%;
        margin: auto 0;
      }

      .topbar-right {
        display: flex;
        align-items: center;
      }

      
      .topbar-right > * {
        margin-right: 5px;
        font-family: 'PT Sans Caption', sans-serif;
        color: #555555;
      }
      
      .topbar-description {
        font-weight: bold;
      }

      .topbar-button {
        font-size: 15px;
        font-weight: bold;
        border: 1px solid #ddd;
        background: #F5F5F5 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;

      }
    `}</style></>
  )
}