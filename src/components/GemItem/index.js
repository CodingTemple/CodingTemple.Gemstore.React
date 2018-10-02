import React, { Component } from 'react';
import './main.css';

export default class GemItem extends Component {
  render() {
    return (
      <div className="col-md-4 col-xs-12">
        <div className="card">
          <h4 className="name_price">Card Image <span className="float-right">$0.00</span></h4>
          <img className="card-img-top" src="img_avatar1.png" alt="Card" />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="/" className="btn btn-primary">See Profile</a>
          </div>
        </div>
        <br />
      </div>
    )
  }
}
