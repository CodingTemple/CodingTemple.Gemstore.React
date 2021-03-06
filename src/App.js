import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Weather from './components/views/Weather';
import BarChart from './components/views/Barchart';
import Racer from './components/views/Racer';

class App extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      cartTotal: 0,
      gems: []
    };
  }

  updateCartTotal = () => {
    let existingTotal = this.state.cartTotal;
    existingTotal = 0;
    this.state.cart.forEach(item => {
      existingTotal += item.price;
    });
    return this.setState({
      cartTotal: existingTotal
    })
  }

  addToCart = cartItem => {
    let currentCart = this.state.cart;
    currentCart.push(cartItem);
    this.setState({
      cart: currentCart
    });
    this.updateCartTotal();
  };

  emptyCart = () => this.setState({cart: [], cartTotal: 0});

  componentDidMount() {
    fetch("data/gems.json")
      .then(response => response.json())
      .then(json => this.setState({gems: json}));
  }

  render() {
    return (
      <div>
        <Navigation onEmptyCart={this.emptyCart} cart={this.state.cart} cartTotal={this.state.cartTotal} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home gems={this.state.gems} onAddToCart={this.addToCart} />}></Route>
            <Route exact path="/weather" component={Weather}></Route>
            <Route exact path="/barchart" component={BarChart}></Route>
            <Route exact path="/f1-racer" component={Racer}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
