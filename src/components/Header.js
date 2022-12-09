import React from 'react'
import logo from "../source/react.png"
import "../styles/Header.css"

function Header() {
  return (
    <div className='header'>
        <div className='logo__container'>
         <img className='logo' src={logo} alt="logo"></img>
        </div>
        <div className='buttons__container'>
            <a className='btn' href='#'>Home</a>
            <a className='btn' href='#'>Cart</a>
            <a className='btn' href='#'>About</a>
            <a className='btn' href='#'>Services</a>
            <a className='btn' href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Header