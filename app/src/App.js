import React, { Component } from 'react';
import './App.css';
import { cars } from './data';
import Car from './cars'



export default class App extends Component {
  
  render () {
    return (
      <div>{cars.map((car) => {
        
        return (
          < Car key={car.id} {...car}></Car>
          
        )
      })}</div>
    )
  }

}








