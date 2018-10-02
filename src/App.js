import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Weather from './components/views/Weather';
import gems from './static/data/gems';

class App extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      cartTotal: 0,
    };
  }

  updateCart = () => {

  }

  addToCart = cartItem => {
    let currentCart = this.state.cart;
    currentCart.push(cartItem);
    this.setState({
      cart: currentCart
    });
  };

  render() {
    return (
      <div>
        <Navigation cart={this.state.cart} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home gems={gems} onAddToCart={this.addToCart} />}></Route>
            <Route exact path="/weather" component={Weather}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
