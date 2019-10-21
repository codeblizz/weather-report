import React, {Component} from 'react';
import WeatherDisplay from './WeatherDisplay.js';
import './App.css';
import NavBar from './NavBar.js';

const PLACES = [
  {name: "Abu Dhabi", zip: "40°C"},
  {name: "Dubai", zip: "35°C"},
  {name: "Sharjah", zip: "33°C"},
  {name: "Ajman", zip: "30°C"},
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      activePlace: 0
    };
  }
  render(){
    const active = this.state.activePlace;
  return (
    <div className="App">
      <NavBar/>
      <WeatherDisplay zip={PLACES[active].zip} name={PLACES[active].name}/>
      {PLACES.map((place, index) => (    
        <button 
          key={index}
          onClick={() => {
            this.setState({activePlace: index});
          }}
          >
        {place.name}
        </button>
      ))}
    </div>
  );
}
}

export default App;
