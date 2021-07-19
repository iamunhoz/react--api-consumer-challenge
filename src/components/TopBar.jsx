import React from 'react'

export default function TopBar() {
  return (<>
    <div className={'topbar-container'}>
      <img className={'vertical-align topbar-logo'} src='/logo.svg'></img>
      <div className={'vertical-align topbar-right'}>
        <div className={'text-flex'}>
          <span className={'topbar-description text'}>Ivã A. Munhoz</span>
          <span className={' text'}>Teste de Front-end</span>
        </div>
        <button className={'topbar-bold topbar-button'}>CB</button>
      </div>
    </div>
    <style>{`
      .topbar-container {
        width: 100%;
        height: 64px;
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
        justify-content: space-between;
      }

      .topbar-right > * {
        margin-right: 10px;
        font-family: 'PT Sans Caption', sans-serif;
        color: #555555;
      }

      .text-flex {
        display: flex;
        justify-content: space-between;
      }

      .text {
        padding: 0 5px;
      }

      @media (max-width: 600px) {
        .text-flex {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .text {
          font-size: 10px;
        }
      }
      
      .topbar-description {
        font-weight: bold;
      }

      .topbar-button {
        font-size: 15px;
        font-weight: bold;
        border: 1px solid #eee;
        background: #F5F5F5 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
        padding: 5px;
      }

      .topbar-button:hover {
        background-color: #555555;
        color: #F5F5F5;
      }
    `}</style></>
  )
}