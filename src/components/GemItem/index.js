import React, { Component } from 'react';
import './main.css';

export default class GemItem extends Component {
  render() {

    const gem = this.props.gem;

    return (
      <div className="col-md-4 col-xs-12">
        <div className="card">
          <h4 className="name_price">{gem.name} <span className="float-right">{`$${Number(gem.price).toFixed(2)}`}</span></h4>
          <img className="card-img-top" src="http://placehold.it/500x500" alt="Card" />
          <div className="card-body">
            <div className="text-center">
              <button className="btn btn-success" onClick={this.props.onAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}
