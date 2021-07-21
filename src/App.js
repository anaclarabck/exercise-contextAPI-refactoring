import React, { Component } from 'react'
import './App.css';
import Cars from './Cars';
import CarsContext from './CarsContext'

class App extends Component {
  constructor() {
    super()
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      [car]: side,
    })
  }

  render() {
    const contextValue = {
      redCar: this.state.red,
      blueCar: this.state.blue,
      yellowCar: this.state.yellow,
      moveCar: this.moveCar,
    }

    return (
      <CarsContext.Provider value={ contextValue }>
        <Cars />
      </CarsContext.Provider>
    )
  }
}

export default App;
