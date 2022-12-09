import React, { Component } from 'react'

export default class NumberClassComp extends Component {
  render() {
    if(this.props.num<5){
      throw new Error('number less than 5')
    }
    return (
      <>
      <button onClick={this.props.btnHandler} className='button'>Get Number</button>
      <h1>{this.props.num}</h1>
      </>
    )
  }
}
