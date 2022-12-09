import React, { Component } from 'react'
import logo from "../source/react.png"
import "../styles/Card.css"
export class Card extends Component {
  render() {
    return (
      <div className='card'>
      <div className='left__container'>
      <h1 className='dish__name'>
           Name of the dish
        </h1>
        <p className='dish__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the 
            into electronic typesetting, <span>remaining essentially unchanged. It was
             popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like</span><a className='exp'> more....</a>
        </p>
      </div>
      <div className='right__container'>
        <img className='dish__image' src={logo}></img>
        <div className='btn__group'>
            <a className='btns plus'>+</a>
            <input className='input' value={0}></input>
            <a className='btns minus'>-</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Card