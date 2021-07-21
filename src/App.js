import React, { Component } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarsContext from './CarsContext'


class App extends Component {
  constructor() {
    super()
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signalColor: 'red'
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      [car]: side,
    })
  }
 
  changeSignal(color) {
    this.setState({
      signalColor: color,
    })
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    return (
      <CarsContext.Provider value={ contextValue }>
        <Cars />
        <TrafficSignal />
      </CarsContext.Provider>
    )
  }
}

export default App;
