import React from 'react'

interface searchProps {
  inputValue: string;
  inputOnChange: ChangeEventHandler<HTMLInputElement>;
  submitAction: MouseEventHandler<HTMLButtonElement>;

}
export default function SearchBar(props:searchProps) {
  return (
    <div>
      <form>
        <label>
          Nome do Personagem:
          <input
            type="text"
            name="name"
            value={props.inputValue}
            onChange={props.inputOnChange}
          />
        </label>
      </form>
        
      <button onClick={props.submitAction}>
        <img src='/searchIcon.svg'></img>
      </button>
    </div>
  )
}