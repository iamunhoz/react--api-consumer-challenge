import React from 'react'

interface searchProps {
  inputValue: string;
  inputOnChange: ChangeEventHandler<HTMLInputElement>;
  submitAction: MouseEventHandler<HTMLButtonElement>;

}
export default function SearchBar(props:searchProps) {
  return (
    <div>

      <h2 className={'search-label'}>Nome do Personagem</h2>

      <input
        className={'search-colors'}
        type="text"
        name="name"
        value={props.inputValue}
        onChange={props.inputOnChange}
      />
        
      <button
        className={'search-colors'} onClick={() => props.submitAction(0)}>

        <img
          className={'search-colors'} src='/searchIcon.svg'></img>
      
      </button>

      <style>{`
        .search-label {
          text-align: left;
          font: normal normal bold 16px/24px PT Sans Caption;
          letter-spacing: 0px;
          color: #555555;
          opacity: 1;
        }
        .search-colors {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border: 1px solid #E5E5E5;
          border-radius: 4px;
          opacity: 1;
          font: italic normal normal 14px/19px PT Sans;
          letter-spacing: 0px;
          color: #8E8E8E;
        }
      `}</style>
    </div>
  )
}