import React, { Component } from 'react'

class WeatherDisplay extends Component{
    constructor(){
      super();
      this.state = {weatherData: null};
    }
  render() {
    return (
        <div>
            <h1 >TODAY WEATHER REPORT FOR UAE </h1>
            <h2>{this.props.name} is {this.props.zip}</h2>
        </div>
    )
  }
  }

  export default WeatherDisplay;