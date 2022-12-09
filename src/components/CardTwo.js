import React, { Component } from 'react'
import logo from "../source/react.png"
import "../styles/Cardtwo.css"
export class CardTwo extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         qty:0,
         current:"none"
      }
    }
  
    increament=()=>{
        if(this.state.qty==10){
            this.setState({
                qty:10
            })
        }
        else{
            this.setState({
                qty:this.state.qty+1
                
            })
        }
    }
    decreament=()=>{
        if(this.state.qty==0){
            this.setState({
                qty:0
            })
        }
        else{
            this.setState({
                qty:this.state.qty-1
                
            })
        }
    }
   
    expand=(e)=>{
        if(this.state.current=="none"){
            this.setState({
                current:""
            })
            e.target.innerText=" less...";
        }
        else{
            this.setState({
                current:"none"
            })
            e.target.innerText=" more...";
        }
    }

    render() {
    return (
      <div className='card__two'>
        <img src={logo} className="logo__img"></img>
        <p className='dish__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's<span className={`${this.state.current}`}> standard dummy text ever since the 1500s,
              Lorem Ipsum passages, and more recently with desktop publishing software like</span>
              <a className='exp' onClick={this.expand}> more....</a>
        </p>
       <div className='bottom'>
        <p className='price'>price</p>
        <div className='inp__group'>
            <a className='plus' onClick={this.increament}>+</a>
            <input className='inp' value={this.state.qty}></input>
            <a className=' minus' onClick={this.decreament}>-</a>
        </div>
       </div>
      </div>
    )
  }
}

export default CardTwo