import React, { Component } from 'react'
import Home from '../views/Home';
import Weather from '../views/Weather';
import BarChart from '../views/Barchart';
import Racer from '../views/Racer';
import Navigation from '../Navigation';

import {Switch, Route} from 'react-router-dom';

export default class Main extends Component {
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

  emptyCart = () => this.setState({ cart: [], cartTotal: 0 });

  render() {
    // console.log(this.props)
    return (
      <div>
        <Navigation onEmptyCart={this.emptyCart} cart={this.state.cart} cartTotal={this.state.cartTotal} />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home onAddToCart={this.addToCart} />}></Route>
            <Route exact path="/weather" component={Weather}></Route>
            <Route exact path="/barchart" component={BarChart}></Route>
            <Route exact path="/f1-racer" component={Racer}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
