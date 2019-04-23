import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="row">
          <div className="col m8 ">  
            <div className="row">
                
                <Product judul="Charger HP" keterangan="Hp mahal dong, hkualitas pasti terjamin dan the best"/>
                <Product judul="Charger HP" keterangan="Hp mahal dong, hkualitas pasti terjamin dan the best"/>
                <Product judul="Charger Laptop" keterangan="Hp mahal dong, hkualitas pasti terjamin dan the best"/>
            </div>
          </div>
      </div>
    ); 
  }
}

export default App;
