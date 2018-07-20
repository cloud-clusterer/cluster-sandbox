import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ClusterGl } from 'cluster-gl';
import { Polygon, Vector3 } from '@cloud-clusterer/simple-gl';

class App extends Component {
  render() {
    const hexagon = new Polygon(6, 0.3, new Vector3(1,0,0))
    console.log(hexagon)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ClusterGl />
      </div>
    );
  }
}

export default App;
