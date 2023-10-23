import { useState } from 'react'
import './NightMode.css'


export function NightModeToggle ({active}){
    const night = true
    const [mode,setMode] = useState(false)
    const text = mode ? "Modo noche":"Modo dia"

    const iconClassName = (mode==false) ? "fa-solid fa-sun":"fa-solid fa-moon"
const buttonClassName = (mode==false) ? "sun":"moon"
    const handleClick = ()=>{
    setMode(!mode)
    !night
    }
    return(
        <>
      <button className={buttonClassName} onClick={handleClick} ><i className={iconClassName}></i>{text}</button>
      <br />
    </>
   
   
    )
}